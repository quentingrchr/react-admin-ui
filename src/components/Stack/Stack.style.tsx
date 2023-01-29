import styled from "styled-components";
import { IProps } from "./Stack.component";

const alignMap: Record<NonNullable<IProps["align"]>, string> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline",
};

const justifyMap: Record<NonNullable<IProps["justify"]>, string> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const Container = styled.div<{
  direction: IProps["direction"];
  spacing: NonNullable<IProps["spacing"]>;
  align: NonNullable<IProps["align"]>;
  justify: NonNullable<IProps["justify"]>;
  css?: NonNullable<IProps["css"]>;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justifyMap[justify]};
  align-items: ${({ align }) => alignMap[align]};
  align-items: center;
  gap: ${({ spacing, theme }) =>
    typeof spacing === "number" ? `${theme.spacing[spacing]}px` : `${spacing}`};
`;
