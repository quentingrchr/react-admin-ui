import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import TextArea, { IProps } from "./TextArea.component";
import { getIconParametersOptions } from "../../shared/utils";

export default {
  title: "Molecules/TextArea",
  component: TextArea,
  argTypes: {
    id: {
      description: "The id of the text area.",
      control: {
        type: "text",
      },
    },
    label: {
      defaultValue: "",
      description: "The label of the text area.",
      control: {
        type: "text",
      },
    },
    value: {
      description: "The value of the text area.",
      control: {
        type: "text",
      },
    },
    onChange: {
      description: "The function to call when the text area changes.",
      control: {
        type: "function",
      },
    },
    placeholder: {
      defaultValue: "",
      description: "The placeholder of the text area.",
      control: {
        type: "text",
      },
    },
    disabled: {
      defaultValue: false,
      description: "Whether the text area is disabled.",
      control: {
        type: "boolean",
      },
    },
    isValid: {
      defaultValue: false,
      description: "Whether the text area is valid.",
      control: {
        type: "boolean",
      },
    },
    isInvalid: {
      defaultValue: false,
      description: "Whether the text area is invalid.",
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
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return <TextArea {...args} onChange={onChange} value={value} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Text area is disabled you can't enter value",
} as IProps;

export const Valid = Template.bind({});
Valid.args = {
  placeholder: "Enter a value ...",
  disabled: false,
  isValid: true,
} as IProps;

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: "The value is invalid",
  disabled: false,
  isInvalid: true,
} as IProps;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
  placeholder: "Enter a value ...",
  disabled: false,
  isValid: false,
  isInvalid: false,
} as IProps;
