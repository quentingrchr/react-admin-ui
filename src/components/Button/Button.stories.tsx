import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Button, { IProps } from "./Button.component";
import { getIconParametersOptions } from "../../shared/utils";

const variantsParameterOptions: IProps["variant"][] = [
  "primary",
  "secondary",
  "tertiary",
  "destructive",
];

export default {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      description: "The variant to use.",
      control: {
        type: "select",
        options: variantsParameterOptions,
      },
    },
    label: {
      defaultValue: "Button",
      description: "The label to use.",
      control: {
        type: "text",
      },
    },
    leftIcon: {
      defaultValue: undefined,
      description: "The icon to use.",
      control: {
        type: "select",
        options: getIconParametersOptions(),
      },
    },
    rightIcon: {
      defaultValue: undefined,
      description: "The icon to use.",
      control: {
        type: "select",
        options: getIconParametersOptions(),
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
  onClick: action("onClick"),
} as IProps;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  variant: "primary",
  label: "Primary",
  rightIcon: "refresh-outlined",
  onClick: action("onClick"),
} as IProps;

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: "primary",
  label: "Primary",
  onClick: action("onClick"),
  disabled: true,
} as IProps;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
  onClick: action("onClick"),
} as IProps;

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: "secondary",
  label: "Secondary",
  onClick: action("onClick"),
  disabled: true,
} as IProps;

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  label: "Tertiary",
  onClick: action("onClick"),
} as IProps;

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  variant: "tertiary",
  label: "Tertiary",
  onClick: action("onClick"),
  disabled: true,
} as IProps;

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  label: "Destructive",
  onClick: action("onClick"),
} as IProps;

export const DestructiveDisabled = Template.bind({});
DestructiveDisabled.args = {
  variant: "destructive",
  label: "Destructive",
  onClick: action("onClick"),
  disabled: true,
} as IProps;
