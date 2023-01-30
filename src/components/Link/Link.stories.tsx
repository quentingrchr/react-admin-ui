import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { IProps } from "./Link.component";

export default {
  title: "Molecules/Link",
  component: Button,
  argTypes: {
    label: {
      defaultValue: "Button",
      description: "The label to use.",
      control: {
        type: "text",
      },
    },
    href: {
      defaultValue: "https://www.google.com",
      description: "The href to use.",
      control: {
        type: "text",
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
  label: "Button",
  href: "https://www.google.com",
  target: "_blank",
} as IProps;

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  href: "https://www.google.com",
  target: "_blank",
  disabled: true,
} as IProps;
