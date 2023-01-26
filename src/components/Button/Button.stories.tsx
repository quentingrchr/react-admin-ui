import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { IProps } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as Meta;

const Template: Story<IProps> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  color: "primary",
  children: "BUTTON",
  onClick: action("onClick"),
} as IProps;

export const DisabledContained = Template.bind({});
DisabledContained.args = {
  disabled: true,
  variant: "contained",
  color: "primary",
  children: "BUTTON",
  onClick: action("onClick"),
} as IProps;

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "primary",
  children: "BUTTON",
  onClick: action("onClick"),
} as IProps;

export const Text = Template.bind({});
Text.args = {
  color: "primary",
  children: "BUTTON",
  onClick: action("onClick"),
} as IProps;
