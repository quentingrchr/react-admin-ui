import "styled-components";
import { ThemeSizeTag, ThemeWeight } from "../../types";
type ThemeTagsMap = Record<ThemeSizeTag, number>;
type ThemeWeightMap = Record<ThemeWeight, number>;

declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      family: {
        primary: string;
      };
      size: ThemeTagsMap;
      weight: ThemeWeightMap;
      lineHeight: ThemeTagsMap;
    };
    colors: {
      primary: {
        white: string;
        black: string;
        brand: string;
      };
      secondary: {
        neutral1: string;
        neutral2: string;
        neutral3: string;
        neutral4: string;
        error: string;
        success: string;
      };
      tertiary: {
        hover1: string;
        pressed: string;
        bgSuccess: string;
        bgError: string;
        bgBrand: string;
        hoverDestroy: string;
        hoverDestroyPressed: string;
      };
    };
  }
}
