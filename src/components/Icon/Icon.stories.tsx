import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { getIconParametersOptions } from "../../shared/utils";
import Button, { IProps } from "./Icon.component";
import { getColorStringInterpolationParametersOptions } from "../../shared/utils";

export default {
  title: "Atoms/Icon",
  component: Button,
  argTypes: {
    icon: {
      defaultValue: "refresh-outlined",
      description: "The icon to use.",
      control: {
        type: "select",
        options: getIconParametersOptions(),
      },
    },
    color: {
      defaultValue: "primary",
      description: "The color of the icon.",
      control: {
        type: "select",
        options: getColorStringInterpolationParametersOptions(),
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
  color: "primary-brand",
} as IProps;
