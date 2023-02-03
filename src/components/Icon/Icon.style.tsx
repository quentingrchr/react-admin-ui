import styled from "styled-components";
import theme from "../../shared/styles/theme";
import { selectColorFromColorStringInterpolation } from "../../shared/utils";
import { IProps } from "./Icon.component";

export const Container = styled.span<{
  color: IProps["color"];
  size: keyof typeof theme["icon"]["size"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  --__icon-color: ${({ color, theme }) => {
    if (!color) return theme.colors["primary-black"];
    return selectColorFromColorStringInterpolation(color, theme);
  }};
  --__icon-size: ${({ size, theme }) => theme.icon.size[size]}px;
`;
