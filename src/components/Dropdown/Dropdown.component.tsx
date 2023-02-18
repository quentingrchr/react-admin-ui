import React, { useLayoutEffect, useRef, useState } from "react";
import * as Styled from "./Dropdown.style";

export interface StyledItemProps extends React.HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
  light?: boolean;
  children: React.ReactNode;
}

export interface IProps<T> {
  isOpen: boolean;
  header?: React.ReactNode;
  renderItem: (item: T, Item: React.FC<StyledItemProps>) => React.ReactNode;
  items: T[];
  maxHeight?: string;
  maxWidth?: string;
}

/** `Dropdown` */
const Dropdown = <
  T extends {
    id: string;
  }
>(
  props: IProps<T>
) => {
  const {
    isOpen,
    header,
    renderItem,
    items,
    maxHeight = "2000px",
    maxWidth,
  } = props;
  const listRef = useRef<HTMLUListElement>(null);
  const [listRect, setListRect] = useState<DOMRect | null>(null);

  return (
    <>
      {isOpen && (
        <Styled.Wrapper maxHeight={maxHeight} maxWidth={maxWidth}>
          {header && <Styled.Header>{header}</Styled.Header>}
          <Styled.List ref={listRef}>
            {items.map((item, i) => renderItem(item, Styled.Item))}
          </Styled.List>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default Dropdown;
