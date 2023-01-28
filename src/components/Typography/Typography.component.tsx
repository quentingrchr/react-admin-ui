import React from "react";
import { ThemeSizeTag, ThemeWeight, ThemeColorsMap } from "../../types";
import * as Styled from "./Typography.style";

export type VariantTypes = ThemeSizeTag;
export type ColorStringInterpolation =
  | `primary-${keyof ThemeColorsMap["primary"]}`
  | `secondary-${keyof ThemeColorsMap["secondary"]}`;

type ComponentTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "p"
  | "span"
  | "div"
  | "a";

export interface IProps {
  /** Apply the theme typography styles */
  variant: VariantTypes;
  /** The HTML Tag of the component */
  component: ComponentTypes;
  /** The content of the component */
  children: React.ReactNode;
  /** The text weight */
  weight?: ThemeWeight;
  /** Set the text to uppercase */
  uppercase?: boolean;
  /** Set the text to italic */
  italic?: boolean;
}

const getDefaultWeight = (variant: VariantTypes): ThemeWeight => {
  if (variant.startsWith("h")) return "bold";
  return "regular";
};

/** `Typography` A component that covers all default set of font weights, sizes and line height in your application. */
const Typography: React.FC<IProps> = (props) => {
  const { component, variant, children, weight, ...other } = props;
  const appliedWeight = weight || getDefaultWeight(variant);
  return (
    <Styled.Container
      as={component}
      variant={variant}
      weight={appliedWeight}
      {...other}
    >
      {children}
    </Styled.Container>
  );
};

export default Typography;
