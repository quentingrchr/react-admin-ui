import React from "react";
import * as Styled from "./TextField.style";
import Stack from "../Stack";
import { IconID, TooltipType } from "../../types";
import InputText from "../InputText";
import Typography from "../Typography";

import Tooltip from "../Tooltip";

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  icon?: IconID;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  tooltip?: {
    text: string;
  };
}

/** `TextField` Describe the component */
const TextField: React.FC<IProps> = ({
  /** The id of the input */
  id,
  /** The label of the TextField component */
  label,
  /** Whether the input is valid. */
  error = false,
  /** Whether the input is invalid. */
  success = false,
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
  /** The tooltip component of the input */
  tooltip,
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
          error={error}
          success={success}
          disabled={disabled}
          {...inputHTMLTagProps}
        />
      </Stack>
      {!!tooltip && (
        <Tooltip
          type={(error && "error") || (success && "success") || "default"}
          text={tooltip.text}
        />
      )}
    </Styled.Container>
  );
};

export default TextField;
