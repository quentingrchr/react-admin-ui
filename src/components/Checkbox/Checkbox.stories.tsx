import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox, { IProps } from "./Checkbox.component";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
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
  return <Checkbox {...args} onChange={handleChange} value={isChecked} />;
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
