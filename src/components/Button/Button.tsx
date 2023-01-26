import React from "react";
import styled, { css } from "styled-components";

import * as theme from "../../shared/styles";

const height = {
  small: 32,
  medium: 40,
  large: 44,
};

type VariantTypes = "text" | "contained" | "outlined";

type ColorTypes = "default" | "primary" | "secondary";

type SizeTypes = "small" | "medium" | "large";

export interface IProps {
  /** 내용 */
  children: React.ReactNode;
  /** 타입 */
  variant: VariantTypes;
  /** 색상 */
  color: ColorTypes;
  /** 사이즈 */
  size: SizeTypes;
  /** 상태 */
  disabled: boolean;
  /** 클릭했을 때 호출할 함수 */
  onClick: () => void;
}

/** `Button` 컴포넌트는 어떠한 작업을 실행할 때 사용됩니다. */
const Button: React.FC<IProps> = props => {
  return (
    <StyledButton
      variant={props.variant}
      color={props.color}
      height={height[props.size]}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "text",
  color: "default",
  size: "medium",
  disabled: false,
};

// prettier-ignore
const StyledButton = styled.button<{
  variant?: VariantTypes;
  color: ColorTypes;
  height: number;
}>`
  // common
  border-radius: ${theme.shape.r8};
  border: 1px solid transparent;
  padding: 0 ${theme.spacing.s16};
  height: ${p => p.height}px;
  font-size: ${theme.typography.size.bt1};
  font-weight: ${theme.typography.weight.bold};
  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  // default
  ${p => p.color === "default" && css`
    color: ${theme.color.label};
    ${p.variant === "contained" && css`
      background-color: ${theme.color.gray10};
      color: ${theme.color.label};
    `}
    ${p.variant === "outlined" && css`
      border-color: ${theme.color.label};
      color: ${theme.color.label};
    `}
  `}

  // primary
  ${p => p.color === "primary" && css`
    color: ${theme.color.primary};
    ${p.variant === "contained" && css`
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
    `}
    ${p.variant === "outlined" && css`
      border-color: ${theme.color.primary};
      color: ${theme.color.primary};
    `}
  `}

  // secondary
  ${p => p.color === "secondary" && css`
    color: ${theme.color.secondary};
    ${p.variant === "contained" && css`
      background-color: ${theme.color.secondary};
      color: ${theme.color.white};
    `}
    ${p.variant === "outlined" && css`
      border-color: ${theme.color.secondary};
      color: ${theme.color.secondary};
    `}
  `}
`;

export default Button;
