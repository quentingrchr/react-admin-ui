import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useToggle } from "../../hooks";
import Icon from "../Icon";
import Typography from "../Typography";
import * as Styled from "./DropdownList.style";

export interface IProps {
  maxHeight?: number;
}

const Options = [
  {
    value: "1",
    label: "Option Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "1",
  },
  {
    value: "2",
    label: "Paris",
    id: "2",
  },
  {
    value: "3",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "3",
  },
  {
    value: "4",
    label: "Option 4",
    id: "4",
  },
  {
    value: "5",
    label: "Option 5",
    id: "5",
  },
  {
    value: "6",
    label: "Option 6",
    id: "6",
  },
  {
    value: "7",
    label: "Option 7",
    id: "7",
  },
];

/** `DropdownList` */
const DropdownList: React.FC<IProps> = ({
  /** Max height of the options list (in pixels) */
  maxHeight = 200,
}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isOpen, toggleOpen, setIsOpen] = useToggle(false);

  const [optionsDOMRect, setOptionsDOMRect] = useState<DOMRect | null>(null);
  const [selectDOMRect, setSelectDOMRect] = useState<DOMRect | null>(null);
  const [maxWidthOption, setMaxWidthOption] = useState<number>(0);
  const selectedRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionListRef = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    if (!!optionsRef.current) {
      const rect = optionsRef.current.getBoundingClientRect();
      setOptionsDOMRect(rect);
      console.log(optionsRef.current);
    }
    if (!!selectedRef.current) {
      const rect = selectedRef.current.getBoundingClientRect();
      setSelectDOMRect(rect);
    }
    if (!!optionListRef.current) {
      const maxWidth = optionListRef.current.reduce((acc, el) => {
        if (el && el.getBoundingClientRect().width > acc) {
          return el.getBoundingClientRect().width;
        }
        return acc;
      }, 0);
      setMaxWidthOption(maxWidth);
    }
  }, []);

  function handleSelect(value: string) {
    setIsOpen(!isOpen);
    setValue(value);
  }

  useEffect(() => {
    if (!optionsDOMRect || !selectDOMRect) return;
    console.log("optionsDOMRect", optionsDOMRect.height);
    console.log("selectDOMRect", selectDOMRect.height);
  }, [optionsDOMRect, selectDOMRect]);

  function capHeightWithMaxHeight(height: number) {
    if (height > maxHeight) {
      return maxHeight;
    }
    return height;
  }

  return (
    <Styled.Container
      style={{
        height:
          selectDOMRect && optionsDOMRect
            ? isOpen
              ? `${
                  selectDOMRect.height +
                  capHeightWithMaxHeight(optionsDOMRect.height)
                }px`
              : `${selectDOMRect.height}px`
            : "0px",
        minWidth: maxWidthOption + "px",
      }}
    >
      <Styled.Select ref={selectedRef}>
        <Styled.Placeholder>
          <Typography component="span" variant="body1">
            {!value ? "Select an option..." : value}
          </Typography>
          <Styled.IconWrapper isOpen={isOpen}>
            <Icon
              onClick={toggleOpen}
              icon="chevron-down-filled"
              size="small"
              color="secondary-neutral4"
            />
          </Styled.IconWrapper>
        </Styled.Placeholder>
      </Styled.Select>

      <Styled.OptionsWrapper
        top={selectDOMRect ? selectDOMRect.height : 0}
        maxHeight={maxHeight}
      >
        <Styled.Options ref={optionsRef}>
          {Options.map((option, i) => (
            <Styled.Option
              selected={option.value === value}
              key={option.value}
              onClick={() => handleSelect(option.value)}
              ref={(el) =>
                optionListRef.current && (optionListRef.current[i] = el)
              }
            >
              {option.label}
            </Styled.Option>
          ))}
        </Styled.Options>
      </Styled.OptionsWrapper>
    </Styled.Container>
  );
};

export default DropdownList;
