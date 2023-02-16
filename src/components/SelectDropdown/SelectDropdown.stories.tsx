import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import SelectDropdown, { IProps } from "./SelectDropdown.component";

export default {
  title: "Molecules/SelectDropdown",
  component: SelectDropdown,
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <SelectDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select a country",
  options: [
    {
      id: "1",
      value: "FR",
      label: "🇫🇷 France",
    },
    {
      id: "2",
      value: "DE",
      label: "🇩🇪 Germany",
    },
    {
      id: "3",
      value: "IT",
      label: "🇮🇹 Italy",
    },
    {
      id: "4",
      value: "ES",
      label: "🇪🇸 Spain",
    },
    {
      id: "5",
      value: "PT",
      label: "🇵🇹 Portugal",
    },
    {
      id: "6",
      value: "GB",
      label: "🇬🇧 United Kingdom",
    },
    {
      id: "7",
      value: "??",
      label: "🌍 Others countries, please contact us",
    },
  ],
} as IProps;

export const DefaultWithMaxHeight = Template.bind({});
DefaultWithMaxHeight.args = {
  placeholder: "Choose a planet",
  options: [
    {
      id: "1",
      value: "earth",
      label: "Earth",
    },
    {
      id: "2",
      value: "mars",
      label: "Mars",
    },
    {
      id: "3",
      value: "jupiter",
      label: "Jupiter",
    },
    {
      id: "4",
      value: "saturn",
      label: "Saturn",
    },
    {
      id: "5",
      value: "uranus",
      label: "Uranus",
    },
    {
      id: "6",
      value: "neptune",
      label: "Neptune",
    },
    {
      id: "7",
      value: "pluto",
      label: "Pluto",
    },
    {
      id: "8",
      value: "venus",
      label: "Venus",
    },
    {
      id: "9",
      value: "mercury",
      label: "Mercury",
    },
    {
      id: "10",
      value: "ceres",
      label: "Ceres",
    },
    {
      id: "11",
      value: "Ornithogalum adseptentrionale",
      label: "Ornithogalum adseptentrionale",
    },
  ],
  maxHeight: 200,
} as IProps;

export const DefaultWithNullOption = Template.bind({});
DefaultWithNullOption.args = {
  placeholder: "Which flavor do you like?",
  options: [
    {
      id: "0",
      value: null,
      label: "Unselect",
    },
    {
      id: "1",
      value: "apple",
      label: "Apple",
    },
    {
      id: "2",
      value: "banana",
      label: "Banana",
    },
    {
      id: "3",
      value: "orange",
      label: "Orange",
    },
  ],
  nullOption: "Unselect your selected option",
} as IProps;
