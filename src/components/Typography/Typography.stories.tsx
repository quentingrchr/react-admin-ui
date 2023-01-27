import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { dummyText } from "../../const/index";
import Typography, { IProps } from "./Typography.component";

const variantsParameterOptions: IProps["variant"][] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "subtitle",
  "body1",
  "body2",
  "body3",
];
const componentsParameterOptions: IProps["component"][] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "strong",
  "p",
  "span",
  "div",
  "a",
];

const weightParameterOptions: IProps["weight"][] = [
  "thin",
  "light",
  "regular",
  "medium",
  "semiBold",
  "bold",
];

const colorsParameterOptions: IProps["color"][] = [
  "primary-black",
  "primary-white",
  "primary-brand",
  "secondary-error",
  "secondary-success",
  "secondary-neutral1",
  "secondary-neutral2",
  "secondary-neutral3",
  "secondary-neutral4",
];

export default {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      defaultValue: "body1",
      description: "Apply the theme typography styles",
      control: {
        type: "select",
        options: variantsParameterOptions,
      },
    },
    component: {
      defaultValue: "p",
      description: "The HTML Tag of the component",
      control: {
        type: "select",
        options: componentsParameterOptions,
      },
    },
    color: {
      defaultValue: "primary-black",
      description: "The text color",
      control: {
        type: "select",
        options: colorsParameterOptions,
      },
    },
    weight: {
      defaultValue: "regular",
      description: "The typography weight",
      control: {
        type: "select",
        options: weightParameterOptions,
      },
    },
    uppercase: {
      defaultValue: false,
      description: "Set the text to uppercase",
    },
    italic: {
      defaultValue: false,
      description: "Set the text to italic",
    },
  },
} as Meta;

const Template: Story<IProps> = (args) => (
  <Typography {...args} children={dummyText} />
);

export const h1 = Template.bind({});
h1.args = {
  variant: "h1",
  component: "h1",
} as IProps;

export const h2 = Template.bind({});
h2.args = {
  variant: "h2",
  component: "h2",
} as IProps;

export const h3 = Template.bind({});
h3.args = {
  variant: "h3",
  component: "h3",
} as IProps;

export const h4 = Template.bind({});
h4.args = {
  variant: "h4",
  component: "h4",
} as IProps;

export const h5 = Template.bind({});
h5.args = {
  variant: "h5",
  component: "h5",
} as IProps;

export const subtitle = Template.bind({});
subtitle.args = {
  variant: "subtitle",
  component: "h6",
} as IProps;

export const body1Regular = Template.bind({});
body1Regular.args = {
  variant: "body1",
  component: "p",
} as IProps;

export const body1SemiBold = Template.bind({});
body1SemiBold.args = {
  variant: "body1",
  component: "p",
  weight: "semiBold",
} as IProps;

export const body1Bold = Template.bind({});
body1Bold.args = {
  variant: "body1",
  component: "p",
  weight: "bold",
} as IProps;

export const body1Italic = Template.bind({});
body1Italic.args = {
  variant: "body1",
  component: "p",
  italic: true,
} as IProps;

export const body2Regular = Template.bind({});
body2Regular.args = {
  variant: "body2",
  component: "p",
} as IProps;

export const body2SemiBold = Template.bind({});
body2SemiBold.args = {
  variant: "body2",
  component: "p",
  weight: "semiBold",
} as IProps;

export const body2Bold = Template.bind({});
body2Bold.args = {
  variant: "body2",
  component: "p",
  weight: "bold",
} as IProps;

export const body2Upper = Template.bind({});
body2Upper.args = {
  variant: "body2",
  component: "p",
  uppercase: true,
} as IProps;

export const body2UpperBold = Template.bind({});
body2UpperBold.args = {
  variant: "body2",
  component: "p",
  uppercase: true,
  weight: "bold",
} as IProps;

export const body3SemiBold = Template.bind({});
body3SemiBold.args = {
  variant: "body3",
  component: "p",
  weight: "semiBold",
} as IProps;

export const body3Bold = Template.bind({});
body3Bold.args = {
  variant: "body3",
  component: "p",
  weight: "bold",
} as IProps;

export const body3UpperSemibold = Template.bind({});
body3UpperSemibold.args = {
  variant: "body3",
  component: "p",
  uppercase: true,
  weight: "semiBold",
} as IProps;

export const body3UpperBold = Template.bind({});
body3UpperBold.args = {
  variant: "body3",
  component: "p",
  uppercase: true,
  weight: "bold",
} as IProps;
