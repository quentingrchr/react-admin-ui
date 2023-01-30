import React, { useState, FocusEvent } from "react";
import * as Styled from "./TextField.style";
import Stack from "../Stack";
import { IconID } from "../../types";
import InputText from "../InputText";
import Typography from "../Typography";

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  icon?: IconID;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/** `TextField` Describe the component */
const TextField: React.FC<IProps> = ({
  /** The id of the input */
  id,
  /** The label of the TextField component */
  label,
  /** Whether the input is valid. */
  isInvalid = false,
  /** Whether the input is invalid. */
  isValid = false,
  /** True if the input is disabled. */
  disabled = false,
  /** The right side icon of the input to use */
  icon,
  /** The value of the input */
  value,
  /** The function to call when the input changes */
  onChange,
  /** The placeholder of the input */
  placeholder,
  /** The function to call when user click on the icon */
  onIconClick,
  ...inputHTMLTagProps
}) => {
  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || onIconClick === undefined) return;
    onIconClick(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(event);
  };

  return (
    <Styled.Container>
      <Stack direction="column" spacing={6} align="start" justify="start">
        <Styled.Label htmlFor={id}>
          <Typography variant="body2" weight="semiBold" component="span">
            {label}
          </Typography>
        </Styled.Label>
        <InputText
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          icon={icon ? icon : undefined}
          onIconClick={handleIconClick}
          isInvalid={isInvalid}
          isValid={isValid}
          disabled={disabled}
          {...inputHTMLTagProps}
        />
      </Stack>
    </Styled.Container>
  );
};

export default TextField;
