import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { getIconParametersOptions } from "../../shared/utils";
import Icon, { IProps } from "./Icon.component";
import { getColorStringInterpolationParametersOptions } from "../../shared/utils";
import theme from "../../shared/styles/theme";

export default {
  title: "Atoms/Icon",
  component: Icon,
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
    size: {
      defaultValue: "medium",
      description: "The size of the icon.",
      control: {
        type: "select",
        options: Object.keys(
          (theme as any).icon.size
        ) /* bug with DefaultTheme interface not being extended in stories */,
      },
    },
    onClick: {
      description: "The function to call when the icon is clicked.",
      control: {
        type: "function",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "auto auto auto auto auto auto",
      gridGap: "2rem",
    }}
  >
    {children}
  </div>
);

const IconContainer = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
    }}
  >
    {children}
    <div
      style={{
        marginTop: "0.5rem",
        fontSize: "8px",
        fontFamily: "Inter",
        color: "#70727a",
      }}
    >
      {label}
    </div>
  </div>
);

const AllTemplate: Story<IProps> = (args) => {
  return (
    <Container>
      {getIconParametersOptions().map((icon) => (
        <IconContainer label={icon}>
          <Icon key={icon} icon={icon} color={args.color} size={args.size} />
        </IconContainer>
      ))}
    </Container>
  );
};
const SingleTemplate: Story<IProps> = (args) => {
  return <Icon icon={args.icon} color={args.color} />;
};

export const AllIcons = AllTemplate.bind({});
AllIcons.args = {
  color: "primary-brand",
} as IProps;

export const SingleIcon = SingleTemplate.bind({});
SingleIcon.args = {
  icon: "refresh-outlined",
  color: "primary-brand",
} as IProps;
