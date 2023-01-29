import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button, { IProps } from "./Icon.component";
const iconParameterOptions: IProps["icon"][] = ["refresh-outlined"];

export default {
  title: "Atoms/Icon",
  component: Button,
  argTypes: {
    icon: {
      defaultValue: "refresh-outlined",
      description: "The icon to use.",
      control: {
        type: "select",
        options: iconParameterOptions,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "refresh-outlined",
} as IProps;
