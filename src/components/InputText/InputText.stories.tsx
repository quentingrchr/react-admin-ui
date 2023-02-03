import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import InputText, { IProps } from "./InputText.component";
import { getIconParametersOptions } from "../../shared/utils";

export default {
  title: "Molecules/InputText",
  component: InputText,
  argTypes: {
    value: {
      description: "The value of the input.",
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "The function to call when the input changes.",
      control: {
        type: "function",
      },
    },
    placeholder: {
      defaultValue: "",
      description: "The placeholder of the input.",
      control: {
        type: "text",
      },
    },
    disabled: {
      defaultValue: false,
      description: "Whether the input is disabled.",
      control: {
        type: "boolean",
      },
    },
    success: {
      defaultValue: false,
      description: "Whether the input is valid.",
      control: {
        type: "boolean",
      },
    },
    error: {
      defaultValue: false,
      description: "Whether the input is invalid.",
      control: {
        type: "boolean",
      },
    },
    icon: {
      defaultValue: undefined,
      description: "The icon to use",
      control: {
        type: "select",
        options: getIconParametersOptions(),
      },
    },
    onIconClick: {
      defaultValue: undefined,
      description: "The function to call when the icon is clicked.",
      control: {
        type: "function",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  const [value, setValue] = React.useState(args.value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <InputText {...args} onChange={onChange} value={value} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Input is disabled you can't enter value",
} as IProps;

export const Success = Template.bind({});
Success.args = {
  placeholder: "Enter a value ...",
  disabled: false,
  success: true,
} as IProps;

export const Error = Template.bind({});
Error.args = {
  placeholder: "Error input",
  disabled: false,
  error: true,
} as IProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Enter a value ...",
  disabled: false,
  icon: "search-filled",
  onIconClick: action("onIconClick"),
} as IProps;

export const WithIconDisabled = Template.bind({});
WithIconDisabled.args = {
  placeholder: "Input is disabled you can't enter value",
  disabled: true,
  icon: "refresh-filled",
  onIconClick: action("onIconClick"),
} as IProps;
