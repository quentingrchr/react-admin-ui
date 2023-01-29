import React, { useState, FocusEvent } from "react";
import * as Styled from "./InputText.style";
import { IconID } from "../../types";
import IconSelector from "../IconSelector";

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  icon?: IconID;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/** `InputText` Describe the component */
const InputText: React.FC<IProps> = ({
  /** Whether the input is valid. */
  isInvalid = false,
  /** Whether the input is invalid. */
  isValid = false,
  /** True if the input is disabled. */
  disabled = false,
  /** The right side icon to use */
  icon,
  /** The value of the input */
  value,
  /** The function to call when the input changes */
  onChange,
  /** The placeholder of the input */
  placeholder,
  /** The function to call when user click on the icon */
  onIconClick,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsFocused(false);
  };

  const handleIconClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || onIconClick === undefined) return;
    onIconClick(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(event);
  };

  return (
    <Styled.InputWrapper
      isFocused={isFocused}
      isDisabled={disabled}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <Styled.Input
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
      {icon !== undefined && (
        <Styled.IconWrapper onClick={handleIconClick}>
          <IconSelector icon={icon} />
        </Styled.IconWrapper>
      )}
    </Styled.InputWrapper>
  );
};

export default InputText;
