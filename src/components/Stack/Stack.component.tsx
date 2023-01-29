import React, { ReactNode, ElementType, CSSProperties } from "react";
import theme from "../../shared/styles/theme";
import * as Styled from "./Stack.style";

type StackDirection = "row" | "column" | "row-reverse" | "column-reverse";

type StackAlign = "start" | "end" | "center" | "stretch" | "baseline";

type StackJustify =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

type Spacing = keyof typeof theme.spacing | string;

type CustomStyle = CSSProperties;

export interface IProps {
  children: ReactNode;
  component?: ElementType;
  direction?: StackDirection;
  justify?: StackJustify;
  align?: StackAlign;
  spacing?: Spacing;
  css: CustomStyle;
}

/** `Stack` Component thet manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child. */
const Stack: React.FC<IProps> = ({
  /** The content of the component. */
  children,
  /** The HTML tag used for the component node. */
  component = "div",
  /** Defines the flex-direction style property. It is applied for all screen sizes. */
  direction = "column",
  /** Defines the justify-content style property. It is applied for all screen sizes. */
  justify = "start",
  /** Defines the align-items style property. It is applied for all screen sizes. */
  align = "center",
  /** Defines the space between immediate children. It is applied for all screen sizes. Can be specified by theme values (number) or custom values (string) */
  spacing = 1,
  /** Allows defining additional CSS styles. */
  css = {},
}) => {
  return (
    <Styled.Container
      as={component}
      direction={direction}
      justify={justify}
      align={align}
      spacing={spacing}
      style={css}
    >
      {children}
    </Styled.Container>
  );
};

export default Stack;
