import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { dummy } from "../../shared/styles";
import Typography, { IProps } from "./Typography";

export default {
  title: "Design System/Typography",
  component: Typography,
} as Meta;

const Template: Story<IProps> = (args) => (
  <Typography {...args} children={dummy.sampleText} />
);

export const h1 = Template.bind({});
h1.args = {
  variant: "h1",
  component: "h1",
} as IProps;

export const h2 = Template.bind({});
h2.args = {
  variant: "h2",
  component: "h2",
} as IProps;

export const h3 = Template.bind({});
h3.args = {
  variant: "h3",
  component: "h3",
} as IProps;

export const h4 = Template.bind({});
h4.args = {
  variant: "h4",
  component: "h4",
} as IProps;

export const h5 = Template.bind({});
h5.args = {
  variant: "h5",
  component: "h5",
} as IProps;

export const h6 = Template.bind({});
h6.args = {
  variant: "h6",
  component: "h6",
} as IProps;

export const s1 = Template.bind({});
s1.args = {
  variant: "s1",
  component: "strong",
} as IProps;

export const s2 = Template.bind({});
s2.args = {
  variant: "s2",
  component: "strong",
} as IProps;

export const b1 = Template.bind({});
b1.args = {
  variant: "b1",
  component: "div",
} as IProps;
export const b2 = Template.bind({});
b2.args = {
  variant: "b2",
  component: "div",
} as IProps;
export const link = Template.bind({});
link.args = {
  variant: "link",
  component: "a",
} as IProps;

export const bt1 = Template.bind({});
bt1.args = {
  variant: "bt1",
  component: "span",
} as IProps;

export const bt2 = Template.bind({});
bt2.args = {
  variant: "bt2",
  component: "span",
} as IProps;

export const cp = Template.bind({});
cp.args = {
  variant: "cp",
  component: "span",
} as IProps;

export const ol = Template.bind({});
ol.args = {
  variant: "ol",
  component: "span",
} as IProps;
