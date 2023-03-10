import React, { useEffect, useRef, useState } from "react";
import { useClickOutsideEvent, useToggle } from "../../hooks";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import Label from "../Label";
import Stack from "../Stack";
import TextField from "../TextField";
import * as Styled from "./SelectDropdown.style";

interface Option {
  id: string;
  value: string;
  label: string;
}

export interface IProps {
  id: string;
  maxHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  nullOption?: string;
  options: Option[];
  onChange: (value: Option["value"] | null) => {};
  placeholder: string;
  label?: string;
  withSearch?: boolean;
}

/** `SelectDropdown` */
const SelectDropdown: React.FC<IProps> = ({
  /** The id of the input */
  id,
  /** The label of the input */
  label,
  /** The placeholder of the input */
  placeholder,
  /** Options of the select */
  options = [],
  /** Max height of the options list */
  maxHeight,
  /** Max width of the options list */
  maxWidth,
  /** Min width of the options list */
  minWidth,
  /** Functions called when the input change */
  onChange,
  /** Null option, label of the option to unset the value of the input */
  nullOption,
  /** Add search feature in the options list */
  withSearch = false,
}) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, toggleOpen, setIsOpen] = useToggle(false);
  const [search, setSearch] = useState<string>("");
  const containerRef = useRef<HTMLFieldSetElement>(null);
  useClickOutsideEvent(containerRef, () => {
    setIsOpen(false);
  });

  function filterOptions(options: Option[], search: string): Option[] {
    if (!search) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }

  function handleSelect(option: Option | null) {
    setIsOpen(!isOpen);
    setSelected(option);
  }

  useEffect(() => {
    if (!onChange) return;
    const value = selected?.value ?? null;
    onChange(value);
  }, [selected, onChange]);

  useEffect(() => {
    if (!isOpen) {
      setSearch("");
    }
  }, [isOpen]);

  return (
    <Styled.FieldContainer
      maxWidth={maxWidth}
      minWidth={minWidth}
      ref={containerRef}
    >
      <Stack direction="column" spacing={6} align="start" justify="start">
        {!!label && <Label id={id}>{label}</Label>}
        <Styled.SelectContainer>
          <Styled.Select onClick={toggleOpen}>
            <Styled.Input>
              <Styled.Placeholder component="span" variant="body1">
                {!selected ? placeholder : selected.label}
              </Styled.Placeholder>
              <Styled.IconWrapper isOpen={isOpen}>
                <Icon
                  icon="chevron-down-filled"
                  size="small"
                  color="secondary-neutral4"
                />
              </Styled.IconWrapper>
            </Styled.Input>
          </Styled.Select>
          <Dropdown<Option>
            isOpen={isOpen}
            header={
              !!withSearch ? (
                <TextField
                  id="search"
                  placeholder="Search..."
                  icon="search-filled"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  iconColor="secondary-neutral4"
                />
              ) : null
            }
            items={filterOptions(options, search)}
            renderItem={(option, Item) => (
              <Item
                key={option.id}
                onClick={() => handleSelect(option)}
                strong={option.id === selected?.id}
              >
                {option.label}
              </Item>
            )}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          />
        </Styled.SelectContainer>
      </Stack>
    </Styled.FieldContainer>
  );
};

export default SelectDropdown;
