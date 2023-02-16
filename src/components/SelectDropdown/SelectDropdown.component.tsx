import React, { useEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks";
import Icon from "../Icon";
import * as Styled from "./SelectDropdown.style";

interface Option {
  id: string;
  value: string;
  label: string;
}

export interface IProps {
  maxHeight?: number;
  nullOption?: string;
  options: Option[];
  onChange: (value: Option["value"] | null) => {};
  placeholder?: string;
}

/** `SelectDropdown` */
const SelectDropdown: React.FC<IProps> = ({
  /** The placeholder of the input */
  placeholder,
  /** Options of the select */
  options = [],
  /** Max height of the options list (in pixels) */
  maxHeight,
  /** Functions called when the input change */
  onChange,
  /** Null option, label of the option to unset the value of the input */
  nullOption,
}) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [isOpen, toggleOpen, setIsOpen] = useToggle(false);

  const selectedRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  function handleSelect(option: Option | null) {
    setIsOpen(!isOpen);
    setSelected(option);
  }

  useEffect(() => {
    if (!onChange) return;
    const value = selected?.value ?? null;
    onChange(value);
  }, [selected, onChange]);

  return (
    <Styled.Container>
      <Styled.Select ref={selectedRef} onClick={toggleOpen}>
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

      {isOpen && (
        <Styled.OptionsWrapper maxHeight={maxHeight}>
          <Styled.Options ref={optionsRef}>
            {!!nullOption && (
              <Styled.Option
                selected={false}
                key={nullOption}
                onClick={() => handleSelect(null)}
                light={true}
              >
                {nullOption}
              </Styled.Option>
            )}
            {options.map((option, i) => (
              <Styled.Option
                selected={option.id === selected?.id}
                key={option.value}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </Styled.Option>
            ))}
          </Styled.Options>
        </Styled.OptionsWrapper>
      )}
    </Styled.Container>
  );
};

export default SelectDropdown;
