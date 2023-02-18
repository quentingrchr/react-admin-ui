import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import InputCheckbox, { IProps } from "./InputCheckbox.component";

export default {
  title: "Molecules/Inputs/InputCheckbox",
  component: InputCheckbox,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "Id of the label",
    },
    label: {
      control: {
        type: "text",
      },
      description: "Label of the checkbox",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChange = (value: boolean) => {
    setIsChecked(value);
  };
  return <InputCheckbox {...args} onChange={handleChange} value={isChecked} />;
};

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
} as IProps;

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "checkbox",
  label: "Label",
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox",
  disabled: true,
} as IProps;
