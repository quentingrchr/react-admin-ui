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
  }
}
