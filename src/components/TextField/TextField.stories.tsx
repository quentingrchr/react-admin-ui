import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import TextField, { IProps } from "./TextField.component";

export default {
  title: "Molecules/Inputs/TextField",
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

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: "with-tooltip",
  label: "Tooltip",
  placeholder: "Type something to search",
  tooltip: {
    text: "This is a tooltip",
  },
} as IProps;

export const WithTooltipAndIcon = Template.bind({});
WithTooltipAndIcon.args = {
  id: "with-tooltip-and-icon",
  label: "Tooltip and icon",
  placeholder: "Type something to search",
  tooltip: {
    text: "This is a tooltip",
  },
  icon: "search-filled",
  onIconClick: action("onIconClick"),
} as IProps;

export const WithTooltipAndError = Template.bind({});
WithTooltipAndError.args = {
  id: "with-tooltip-and-error",
  label: "Tooltip and error",
  placeholder: "Enter your email",
  tooltip: {
    text: "This is a tooltip",
  },
  error: true,
} as IProps;

export const WithTooltipAndSuccess = Template.bind({});
WithTooltipAndSuccess.args = {
  id: "with-tooltip-and-success",
  label: "Tooltip and success",
  placeholder: "Enter your name",
  tooltip: {
    text: "This is a tooltip",
  },
  success: true,
} as IProps;
