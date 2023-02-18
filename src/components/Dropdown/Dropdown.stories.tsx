import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Dropdown, { IProps } from "./Dropdown.component";
import TextField from "../TextField";

export default {
  title: "Molecules/Dropdown/Dropdown",
  component: Dropdown,
  argTypes: {
    isOpen: {
      control: {
        type: "boolean",
      },
      description: "Open or close the dropdown",
    },
    header: {
      control: {
        type: "reactNode",
      },
      description: "Header of the dropdown",
    },
    items: {
      control: {
        type: "array",
      },
      description: "Items of the dropdown",
    },
    itemRender: {
      control: {
        type: "function",
      },
      description: "Function to render the items",
    },
    maxHeight: {
      control: {
        type: "string",
      },
      description: "Max height of the dropdown",
    },
    maxWidth: {
      control: {
        type: "string",
      },
      description: "Max width of the dropdown",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

interface IItem {
  id: string;
  value: string;
  extra: number;
}

const items: IItem[] = [
  {
    id: "item1",
    value: "item1",
    extra: 1,
  },
  {
    id: "item2",
    value: "item2",
    extra: 2,
  },
  {
    id: "item3",
    value: "item3",
    extra: 3,
  },
  {
    id: "item4",
    value: "item4",
    extra: 4,
  },
  {
    id: "item5",
    value: "item5",
    extra: 5,
  },
  {
    id: "item6",
    value: "item6",
    extra: 6,
  },
  {
    id: "item7",
    value: "item7",
    extra: 7,
  },
  {
    id: "item8",
    value: "item8",
    extra: 8,
  },
  {
    id: "item9",
    value: "item9",
    extra: 9,
  },
  {
    id: "item10",
    value: "item10",
    extra: 10,
  },
  {
    id: "item11",
    value: "item11",
    extra: 11,
  },
  {
    id: "item12",
    value: "item12",
    extra: 12,
  },
  {
    id: "item13",
    value: "item13",
    extra: 13,
  },
  {
    id: "item14",
    value: "item14",
    extra: 14,
  },
  {
    id: "item15",
    value: "item15",
    extra: 15,
  },
  {
    id: "item16",
    value: "item16",
    extra: 16,
  },
  {
    id: "item17",
    value: "item17",
    extra: 17,
  },
  {
    id: "item18",
    value: "item18",
    extra: 18,
  },
  {
    id: "item19",
    value: "item19",
    extra: 19,
  },
  {
    id: "item20",
    value: "item20",
    extra: 20,
  },
  {
    id: "item21",
    value: "item21",
    extra: 21,
  },
  {
    id: "item22",
    value: "item22",
    extra: 22,
  },
  {
    id: "item23",
    value: "item23",
    extra: 23,
  },
  {
    id: "item24",
    value: "item24",
    extra: 24,
  },
  {
    id: "item25",
    value: "item25",
    extra: 25,
  },
  {
    id: "item26",
    value: "item26",
    extra: 26,
  },
];

export const Default: Story<IProps<IItem>> = (args) => {
  return (
    <Dropdown<IItem>
      maxHeight={"2000px"}
      isOpen={true}
      renderItem={(item, Item) => (
        <Item key={item.id} strong={item.id === "item1"}>
          {item.value}
        </Item>
      )}
      items={items}
    />
  );
};

export const WithHeader: Story<IProps<IItem>> = (args) => {
  return (
    <Dropdown<IItem>
      maxHeight={"2000px"}
      isOpen={true}
      header={
        <TextField
          id="search"
          placeholder="Search..."
          icon="search-filled"
          value={""}
          onChange={(e) => console.log(e.target.value)}
          iconColor="secondary-neutral4"
        />
      }
      renderItem={(item, Item) => (
        <Item key={item.id} strong={item.id === "item1"}>
          {item.value}
        </Item>
      )}
      items={items}
    />
  );
};

export const WithMaxHeightAndMaxWidth: Story<IProps<IItem>> = (args) => {
  return (
    <Dropdown<IItem>
      maxHeight={"150px"}
      maxWidth={"200px"}
      isOpen={true}
      renderItem={(item, Item) => (
        <Item key={item.id} strong={item.id === "item1"}>
          {item.value}
        </Item>
      )}
      items={items}
    />
  );
};
