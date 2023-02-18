import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Label, { IProps } from "./Label.component";

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "Id of the label",
    },
    children: {
      control: {
        type: "text",
      },
      description: "Content of the label",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});
Default.args = {
  id: "label",
} as IProps;
