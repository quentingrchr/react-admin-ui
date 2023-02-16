import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import SelectDropdown, { IProps } from "./SelectDropdown.component";

export default {
  title: "Molecules/SelectDropdown",
  component: SelectDropdown,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <SelectDropdown {...args} />;
};
const options = [
  {
    value: "1",
    label: "Option Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "1",
  },
  {
    value: "2",
    label: "Paris",
    id: "2",
  },
  {
    value: "3",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "3",
  },
  {
    value: "4",
    label: "Option 4",
    id: "4",
  },
  {
    value: "5",
    label: "Option 5",
    id: "5",
  },
  {
    value: "6",
    label: "Option 6",
    id: "6",
  },
  {
    value: "7",
    label: "Option 7",
    id: "7",
  },
];

export const Default = Template.bind({});
Default.args = {
  options,
  onChange: (v) => action(`onChange: ${v}`),
} as IProps;

export const DefaultWithMaxHeight = Template.bind({});
DefaultWithMaxHeight.args = {
  options,
  maxHeight: 200,
  onChange: (v) => action(`onChange: ${v}`),
} as IProps;

export const DefaultWithNullOption = Template.bind({});
DefaultWithNullOption.args = {
  options,
  nullOption: "Unselect your selected option",
  onChange: (v) => action(`onChange: ${v}`),
} as IProps;
