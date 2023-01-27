import styled, { css } from "styled-components";
import { IProps } from "./Button.component";

const PrimaryVariant = css`
  color: ${({ theme }) => theme.colors.primary.white};
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.primary.brand};
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary.hover1};
  }
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.tertiary.pressed};
  }
`;

const SecondaryVariant = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary.brand};
  color: ${({ theme }) => theme.colors.primary.brand};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.tertiary.hover1};
    color: ${({ theme }) => theme.colors.tertiary.hover1};
  }
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.tertiary.pressed};
    color: ${({ theme }) => theme.colors.tertiary.pressed};
  }
`;

const TertiaryVariant = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary.neutral2};
  color: ${({ theme }) => theme.colors.primary.black};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.black};
  }
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.black};
    background-color: ${({ theme }) => theme.colors.primary.black};
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

const DestructiveVariant = css`
  background-color: ${({ theme }) => theme.colors.secondary.danger};
  border: 1px solid ${({ theme }) => theme.colors.secondary.danger};
  color: ${({ theme }) => theme.colors.primary.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary.hoverDestroy};
    border: 1px solid ${({ theme }) => theme.colors.tertiary.hoverDestroy};
  }
  &:active,
  &:focus {
    background-color: ${({ theme }) => theme.colors.tertiary.pressedDestroy};
    border: 1px solid ${({ theme }) => theme.colors.tertiary.pressedDestroy};
  }
`;

export const Button = styled.button<{ variant: IProps["variant"] }>`
  outline: none;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return PrimaryVariant;
      case "secondary":
        return SecondaryVariant;
      case "tertiary":
        return TertiaryVariant;
      case "destructive":
        return DestructiveVariant;

      default:
        return PrimaryVariant;
    }
  }}
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
