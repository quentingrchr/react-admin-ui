import { ThemeColorsMap } from "./index";
export type ColorStringInterpolation =
  | `primary-${keyof ThemeColorsMap["primary"]}`
  | `secondary-${keyof ThemeColorsMap["secondary"]}`;
