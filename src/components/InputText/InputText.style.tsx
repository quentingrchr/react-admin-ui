import styled, { css } from "styled-components";
import { selectColorFromColorStringInterpolation } from "../../shared/utils";
import { IProps } from "./InputText.component";

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

export const IconWrapper = styled.div<{
  iconColor: NonNullable<IProps["iconColor"]>;
  pointer: boolean;
}>`
  --__icon-color: ${({ theme, iconColor }) =>
    selectColorFromColorStringInterpolation(iconColor, theme)};
  --__icon-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
`;

const isDisableCss = css`
  background-color: ${({ theme }) => theme.colors.secondary.neutral1};
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  cursor: not-allowed;
  ${IconWrapper} {
    opacity: 0.5;
  }
`;

const successCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.success};
`;

const errorCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary.danger};
`;

export const InputWrapper = styled.div<{
  isFocused: boolean;
  isDisabled: IProps["disabled"];
  success: IProps["success"];
  error: IProps["error"];
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  /* min-width: 332px; */
  ${({ isFocused }) => isFocused && isFocusedCss}
  ${({ isDisabled }) => isDisabled && isDisableCss}
  ${({ success }) => success && successCss}
  ${({ error }) => error && errorCss}
`;
