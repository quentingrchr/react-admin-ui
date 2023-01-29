import styled, { css } from "styled-components";
import { IconType } from "../../types";

const filledCss = css<{
  iconType: IconType;
}>`
  svg {
    fill: var(--__icon-color);
  }
`;

const outlinedCss = css<{
  iconType: IconType;
}>`
  svg {
    display: flex;

    path {
      display: flex;
      stroke: var(--__icon-color);
    }
  }
`;

export const Container = styled.span<{
  iconType: IconType;
}>`
  display: inline-flex;
  ${(props) => (props.iconType === "filled" ? filledCss : outlinedCss)};
`;
