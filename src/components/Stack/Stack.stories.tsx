import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import theme from "../../shared/styles/theme";

import Stack, { IProps } from "./Stack.component";
const spacingParameterOptions: IProps["spacing"][] = [
  1,
  2,
  3,
  4,
  5,
  6,
  "1rem",
  "2rem",
  "50px",
];

const directionParameterOptions: IProps["direction"][] = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
];

const justifyParameterOptions: IProps["justify"][] = [
  "start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
];

const alignParameterOptions: IProps["align"][] = [
  "start",
  "end",
  "center",
  "stretch",
  "baseline",
];
export default {
  title: "Atoms/Stack",
  component: Stack,
  argTypes: {
    spacing: {
      control: {
        type: "select",
        options: spacingParameterOptions,
      },
      defaultValue: 1,
      description:
        "Defines the space between immediate children. It is applied for all screen sizes. Can be specified by theme values (number) or custom values (string)",
    },
    direction: {
      control: {
        type: "select",
        options: directionParameterOptions,
      },
      defaultValue: "column",
      description:
        "Defines the flex-direction style property. It is applied for all screen sizes.",
    },
    justify: {
      control: {
        type: "select",
        options: justifyParameterOptions,
      },
    },
    align: {
      control: {
        type: "select",
        options: alignParameterOptions,
      },
      defaultValue: "center",
      description:
        "Defines the align-items style property. It is applied for all screen sizes.",
    },
    css: {
      control: {
        type: "object",
      },
      defaultValue: {},
      description: "Allows defining additional CSS styles.",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Box = ({ color }: { color: string }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      backgroundColor: color,
    }}
  ></div>
);

const Template: Story<IProps> = (args) => (
  <Stack {...args}>
    <Box color="#23a05b" />
    <Box color="#2d66f2" />
    <Box color="#f22b2b" />
  </Stack>
);

export const Column = Template.bind({});
Column.args = {
  direction: "column",
} as IProps;

export const ColumnReverse = Template.bind({});
ColumnReverse.args = {
  direction: "column-reverse",
} as IProps;

export const Row = Template.bind({});
Row.args = {
  direction: "row",
} as IProps;

export const RowReverse = Template.bind({});
RowReverse.args = {
  direction: "row-reverse",
} as IProps;
