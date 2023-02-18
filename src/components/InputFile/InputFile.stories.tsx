import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import InputFile, { IProps } from "./InputFile.component";

export default {
  title: "Molecules/Inputs/InputFile",
  component: InputFile,
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "The id of the input",
    },
    accept: {
      control: {
        type: "array",
      },
      description: "The HTML accept property (file types)",
    },
    buttonLabel: {
      control: {
        type: "text",
      },
      description: "The label of the button",
    },
    label: {
      description: "The label of the input",
    },
    helperText: {
      description: "The helper text of the input",
    },
    maxFileSize: {
      description: "The max file size in bytes",
    },
    minFileSize: {
      description: "The min file size in bytes",
    },
    onChange: {
      description: "The function to call when the input changes",
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<IProps> = (args) => {
  return <InputFile {...args} />;
};

export const PdfUpload = Template.bind({});
PdfUpload.args = {
  id: "input-file-pdf",
  accept: ["application/pdf"],
  label: "File",
  helperText: "PDF up to 10MB",
  maxFileSize: 10000000,
  minFileSize: 0,
  buttonLabel: "Upload",
  onChange: (file: File) => {
    action("onChange")(file);
  },
} as IProps;

export const ImageUpload = Template.bind({});
ImageUpload.args = {
  id: "input-file-image",
  accept: ["image/png", "image/jpeg", "image/gif"],
  label: "Image upload",
  helperText: "PNG, JPG, GIF up to 5MB",
  maxFileSize: 5000000,
  minFileSize: 0,
  buttonLabel: "Upload",
  onChange: (file: File) => {
    action("onChange")(file);
  },
  icon: "photograph-filled",
} as IProps;

export const ImageUploadDisabled = Template.bind({});
ImageUploadDisabled.args = {
  id: "input-file-image",
  accept: ["image/png", "image/jpeg", "image/gif"],
  label: "Image upload",
  helperText: "PNG, JPG, GIF up to 5MB",
  maxFileSize: 5000000,
  minFileSize: 0,
  buttonLabel: "Upload",
  onChange: (file: File) => {
    action("onChange")(file);
  },
  icon: "photograph-filled",
  disabled: true,
} as IProps;
