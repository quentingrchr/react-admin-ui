import styled, { css } from "styled-components";
import { IProps } from "./Link.component";
const disabledStyle = css`
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const Link = styled.a<{ disabled: IProps["disabled"] }>`
  outline: none;
  border: none;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.brand};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiary.hover1};
  }
  &:active,
  &:focus {
    color: ${({ theme }) => theme.colors.tertiary.pressed};
  }
  ${({ disabled }) => {
    if (disabled) {
      return disabledStyle;
    }
  }}
`;
