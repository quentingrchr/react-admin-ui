import styled from "styled-components";
import { selectColorFromColorStringInterpolation } from "../../shared/utils";
import { IconType } from "../../types";
import { IProps } from "./Icon.component";

export const Container = styled.span<{
  color: IProps["color"];
}>`
  display: inline-flex;
  --__icon-color: ${({ color, theme }) => {
    if (!color) return theme.colors["primary-black"];
    return selectColorFromColorStringInterpolation(color, theme);
  }};
`;
