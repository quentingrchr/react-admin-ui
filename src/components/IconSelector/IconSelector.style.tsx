import styled, { css } from "styled-components";
import { IconType } from "../../types";

const filledCss = css<{
  iconType: IconType;
}>`
  svg {
    path {
      fill: var(--__icon-color);
    }
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
  svg {
    width: var(--__icon-size);
    height: var(--__icon-size);
    display: block;
    margin: auto;
  }
`;
