import "styled-components";
import { ThemeSizeTag, ThemeWeight, ThemeColorsMap } from "../../types";

type ThemeTagsMap = Record<ThemeSizeTag, number>;
type ThemeWeightsMap = Record<ThemeWeight, number>;

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: {
        primary: string;
      };
      size: ThemeTagsMap;
      weight: ThemeWeightsMap;
      lineHeight: ThemeTagsMap;
    };
    colors: ThemeColorsMap;
    spacing: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
      8: number;
    };
    icon: {
      size: {
        "x-small": number;
        small: number;
        medium: number;
        large: number;
        "x-large": number;
      };
    };
  }
}
