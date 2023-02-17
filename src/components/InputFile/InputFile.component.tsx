import React, { useState } from "react";
import * as Styled from "./InputFile.style";
import { IconID } from "../../types";
import Stack from "../Stack";
import Typography from "../Typography";
import Tooltip from "../Tooltip";
import { formatBytes } from "../../shared/utils";
import Icon from "../Icon";
import Label from "../Label";

export interface IProps {
  id: string;
  accept: string[];
  label?: string;
  buttonLabel?: string;
  helperText?: string;
  maxFileSize?: number;
  minFileSize?: number;
  icon?: IconID;
  onChange: (file: File) => void;
  disabled?: boolean;
}

/** `InputFile` Describe the component */
const InputFile: React.FC<IProps> = ({
  /** The id of the input */
  id = "input-file",
  /** The HTML accept prsoperty (file types) */
  accept = ["image/png", "image/jpeg", "image/gif"],
  /** Label of the input */
  label,
  /** The label of the button */
  buttonLabel = "Upload",
  /** The helper text of the input */
  helperText = "PNG, JPG, GIF up to 5MB",
  /** The max file size in bytes */
  maxFileSize = 5000000,
  /** The min file size in bytes */
  minFileSize = 0,
  /** The icon to use */
  icon,
  /** The function to call when the input changes */
  onChange,
  /** The disabled state of the input */
  disabled = false,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [succes, setSuccess] = useState<string | null>(null);

  function handleFile(file: File) {
    const { name, size, type } = file;
    if (size > maxFileSize) {
      setError(
        `File too big (${formatBytes(size)}), maximum size is ${formatBytes(
          maxFileSize
        )}`
      );
      return;
    }
    if (size < minFileSize) {
      setError(
        `File too small (${formatBytes(size)}), minimum size is ${formatBytes(
          minFileSize
        )}`
      );
      return;
    }
    if (!accept.includes(type)) {
      setError(`${type} filetype is not allowed`);
      return;
    }

    setSuccess(`${name} selected successfully`);
    onChange(file);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setSuccess(null);
    const file = e.target.files?.[0];
    if (!file) {
      setError("No file selected");
      return;
    }
    handleFile(file);
  };

  function preventDefaultAndStopPropagation(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    preventDefaultAndStopPropagation(e);
    console.log(e);
    const data = e.dataTransfer;
    const file = data.files[0];
    handleFile(file);
  };

  return (
    <Stack direction="column" spacing={6} align="start" justify="start">
      {label && <Label id={id}>{label}</Label>}
      <Styled.Container
        disabled={disabled}
        onDrop={handleDrop}
        onDragOver={(e) => preventDefaultAndStopPropagation(e)}
        onDragEnter={(e) => preventDefaultAndStopPropagation(e)}
        onDragLeave={(e) => preventDefaultAndStopPropagation(e)}
      >
        <Stack direction="column" align="center" justify="center" spacing={8}>
          {!!icon && (
            <Icon icon={icon} size="large" color="secondary-neutral2" />
          )}
          <Styled.MainText>
            <Typography component="p" variant="body2" weight="semiBold">
              <Styled.Content>{buttonLabel}</Styled.Content>
              <input
                type="file"
                id={id}
                hidden
                accept={accept.toString()}
                onChange={handleFileChange}
                disabled={disabled}
              />
              <span>&nbsp;</span>
              <span>or drag and drop</span>
            </Typography>
          </Styled.MainText>
          <Typography component="p" variant="body2" weight="regular">
            {helperText}
          </Typography>
          {!!error && <Tooltip type="error" text={error} />}
          {!!succes && <Tooltip type="success" text={succes} />}
        </Stack>
      </Styled.Container>
    </Stack>
  );
};

export default InputFile;
