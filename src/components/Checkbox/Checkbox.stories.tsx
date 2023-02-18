import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox, { IProps } from "./Checkbox.component";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
      description: "Whether the checkbox is checked",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {} as IProps;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
} as IProps;

const ControlledCheckbox: Story<IProps> = (args) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Checkbox
      checked={checked}
      onClick={() => setChecked(!checked)}
      {...args}
    />
  );
};

export const Controlled = ControlledCheckbox.bind({});
