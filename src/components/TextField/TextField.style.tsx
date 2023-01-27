import styled, { css } from "styled-components";
import { IProps } from "./TextField.component";

const isFocusedCss = css`
  border: 1px solid ${({ theme }) => theme.colors.primary.brand};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary.neutral2};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondary.neutral1};
    cursor: not-allowed;
  }
`;

const isDisableCss = css`
  background-color: ${({ theme }) => theme.colors.secondary.neutral1};
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  cursor: not-allowed;
`;

const isValidCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.success};
`;

const isInvalidCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.danger};
`;

export const InputWrapper = styled.div<{
  isFocused: boolean;
  isDisabled: IProps["disabled"];
  isValid: IProps["isValid"];
  isInvalid: IProps["isInvalid"];
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 332px;
  ${({ isFocused }) => isFocused && isFocusedCss}
  ${({ isDisabled }) => isDisabled && isDisableCss}
  ${({ isValid }) => isValid && isValidCss}
  ${({ isInvalid }) => isInvalid && isInvalidCss}
`;
