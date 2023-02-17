import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import MultiSelectDropdown, { IProps } from "./MultiSelectDropdown.component";

export default {
  title: "Molecules/MultiSelectDropdown",
  component: MultiSelectDropdown,
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
  return <MultiSelectDropdown {...args} />;
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  id: "country",
  label: "Country",
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

export const DefaultWithMaxHeightAndSearch = Template.bind({});
DefaultWithMaxHeightAndSearch.args = {
  id: "planet",
  placeholder: "Choose a planet",
  withSearch: true,
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
    {
      id: "12",
      value: "tatooine",
      label: "Tatooine",
    },
    {
      id: "13",
      value: "alderaan",
      label: "Alderaan",
    },
    {
      id: "14",
      value: "yavin",
      label: "Yavin",
    },
    {
      id: "15",
      value: "hoth",
      label: "Hoth",
    },
    {
      id: "16",
      value: "dagobah",
      label: "Dagobah",
    },
    {
      id: "17",
      value: "bespin",
      label: "Bespin",
    },
    {
      id: "18",
      value: "endor",
      label: "Endor",
    },
    {
      id: "19",
      value: "naboo",
      label: "Naboo",
    },
    {
      id: "20",
      value: "coruscant",
      label: "Coruscant",
    },
    {
      id: "21",
      value: "kamino",
      label: "Kamino",
    },
    {
      id: "22",
      value: "geonosis",
      label: "Geonosis",
    },
    {
      id: "23",
      value: "utapau",
      label: "Utapau",
    },
    {
      id: "24",
      value: "mustafar",
      label: "Mustafar",
    },
    {
      id: "25",
      value: "kashyyyk",
      label: "Kashyyyk",
    },
    {
      id: "26",
      value: "polis",
      label: "Polis",
    },
    {
      id: "27",
      value: "mygeeto",
      label: "Mygeeto",
    },
    {
      id: "28",
      value: "felucia",
      label: "Felucia",
    },
    {
      id: "29",
      value: "cato",
      label: "Cato",
    },
    {
      id: "30",
      value: "saleucami",
      label: "Saleucami",
    },
    {
      id: "31",
      value: "stewjon",
      label: "Stewjon",
    },
    {
      id: "32",
      value: "eridu",
      label: "Eridu",
    },
    {
      id: "33",
      value: "corellia",
      label: "Corellia",
    },
    {
      id: "34",
      value: "rodia",
      label: "Rodia",
    },
    {
      id: "35",
      value: "nalhutta",
      label: "Nalhutta",
    },
    {
      id: "36",
      value: "dantooine",
      label: "Dantooine",
    },
    {
      id: "37",
      value: "bestine",
      label: "Bestine",
    },
    {
      id: "38",
      value: "ordmantell",
      label: "Ord Mantell",
    },
    {
      id: "39",
      value: "unknown",
      label: "Unknown",
    },
    {
      id: "40",
      value: "trandosha",
      label: "Trandosha",
    },
    {
      id: "41",
      value: "socorro",
      label: "Socorro",
    },
    {
      id: "42",
      value: "moncalamari",
      label: "Mon Calamari",
    },
  ],
  maxHeight: "200px",
  maxWidth: "300px",
  minWidth: "200px",
} as IProps;

export const DefaultWithNullOption = Template.bind({});
DefaultWithNullOption.args = {
  id: "flavor",
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
