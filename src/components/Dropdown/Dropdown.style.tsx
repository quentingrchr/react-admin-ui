import styled from "styled-components";
import { IProps, StyledItemProps } from "./Dropdown.component";

export const Item = styled.li<Omit<StyledItemProps, "children">>`
  padding: 8px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.body1}px;
  color: ${({ theme, light }) =>
    light ? theme.colors.secondary.neutral4 : theme.colors.primary.black};
  font-weight: ${({ strong }) => (strong ? "bold" : "normal")};
  background-color: ${({ strong, theme }) =>
    strong ? theme.colors.secondary.neutral1 : "transparent"};
  cursor: pointer;
  box-sizing: content-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.neutral1};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  padding: 12px 16px;
`;

export const Wrapper = styled.div<{
  maxHeight: IProps<{}>["maxHeight"];
  maxWidth: IProps<{}>["maxWidth"];
}>`
  position: absolute;
  left: 0;
  top: 0px;
  width: 100%;
  left: 0;
  z-index: 2;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: 8px;
  max-height: ${({ maxHeight }) =>
    maxHeight !== undefined ? maxHeight : "none"};
  overflow-y: scroll;
  max-width: ${({ maxWidth }) => (maxWidth !== undefined ? maxWidth : "none")};
  width: 100%;
  ${Item} {
    max-width: ${({ maxWidth }) =>
      maxWidth !== undefined ? maxWidth : "none"};
  }
  ${List} {
    max-width: ${({ maxWidth }) =>
      maxWidth !== undefined ? maxWidth : "none"};
  }
`;
