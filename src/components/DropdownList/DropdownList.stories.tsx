import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DropdownList, { IProps } from "./DropdownList.component";

export default {
  title: "Molecules/DropdownList",
  component: DropdownList,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <DropdownList />;
};

export const Default = Template.bind({});
Default.args = {} as IProps;
