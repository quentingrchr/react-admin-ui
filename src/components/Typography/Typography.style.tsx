import styled, { DefaultTheme } from "styled-components";
import { VariantTypes, ColorStringInterpolation } from "./Typography.component";
import { ThemeWeight } from "../../types";

function getColorFromColorStringInterpolation(
  color: ColorStringInterpolation,
  theme: DefaultTheme
): string {
  const [colorType, colorShade] = color.split("-");
  return theme.colors[colorType][colorShade];
}

export const Container = styled.div<{
  variant: VariantTypes;
  weight: ThemeWeight;
  // color: ColorStringInterpolation;
  uppercase?: boolean;
  italic?: boolean;
}>`
  font-size: ${(props) => props.theme.font.size[props.variant]}px;
  font-family: ${(props) => props.theme.font.family.primary};
  line-height: ${(props) => props.theme.font.lineHeight[props.variant]}px;
  font-weight: ${(props) => props.theme.font.weight[props.weight]};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
  letter-spacing: ${(props) => {
    if (props.uppercase) return 0.1;
    return 0;
  }}em;
`;
