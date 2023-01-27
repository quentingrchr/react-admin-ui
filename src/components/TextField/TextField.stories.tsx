import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import TextField, { IProps } from "./TextField.component";

export default {
  title: "Molecules/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
} as IProps;

export const Valid = Template.bind({});
Valid.args = {
  disabled: false,
  isValid: true,
} as IProps;

export const Invalid = Template.bind({});
Invalid.args = {
  disabled: false,
  isInvalid: true,
} as IProps;
