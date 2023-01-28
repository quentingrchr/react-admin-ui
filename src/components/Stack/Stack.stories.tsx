import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import theme from "../../shared/styles/theme";

import Stack, { IProps } from "./Stack.component";

export default {
  title: "Atoms/Stack",
  component: Stack,
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
