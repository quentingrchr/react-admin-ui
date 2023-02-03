import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import TextField, { IProps } from "./TextField.component";
import { getIconParametersOptions } from "../../shared/utils";

export default {
  title: "Molecules/TextField",
  component: TextField,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  const [value, setValue] = React.useState(args.value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <TextField {...args} onChange={onChange} value={value} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Label name",
  placeholder: "Placeholder",
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  id: "disabled",
  label: "Disabled field",
  placeholder: "You can't edit this field",
  disabled: true,
} as IProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  id: "with-icon",
  label: "Search",
  placeholder: "Type something to search",
  icon: "search-filled",
  onIconClick: action("onIconClick"),
} as IProps;

export const WithError = Template.bind({});
WithError.args = {
  id: "with-error",
  label: "Error",
  placeholder: "Type something to search",
  error: true,
} as IProps;

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  id: "with-success",
  label: "Success",
  placeholder: "Type something to search",
  success: true,
} as IProps;
