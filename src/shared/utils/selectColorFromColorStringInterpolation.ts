import { ColorStringInterpolation } from "../../types";
import { DefaultTheme } from "styled-components";

export default function selectColorFromColorStringInterpolation(
  color: ColorStringInterpolation,
  theme: DefaultTheme
): string {
  const category = color.split("-")[0];
  const colorName = color.split("-")[1];
  const colorValue = theme.colors[category][colorName];
  return colorValue;
}
