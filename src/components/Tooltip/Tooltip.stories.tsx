import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Tooltip, { IProps } from "./Tooltip.component";

export default {
  title: "Molecules/Inputs/Tooltip",
  component: Tooltip,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "The type of the tooltip.",
      control: {
        type: "select",
        options: ["default", "error", "success"],
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <Tooltip {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: "default",
  text: "This is a default tooltip",
} as IProps;

export const Error = Template.bind({});
Error.args = {
  type: "error",
  text: "This is an error tooltip",
} as IProps;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  text: "This is a success tooltip",
} as IProps;
