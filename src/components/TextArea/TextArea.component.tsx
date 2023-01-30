import React, { useState, FocusEvent } from "react";
import * as Styled from "./TextArea.style";
import { IconID } from "../../types";
import IconSelector from "../IconSelector";

export interface IProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  icon?: IconID;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/** `TextArea` Describe the component */
const TextArea: React.FC<IProps> = ({
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
  ...textareaHTMLTagProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return;
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return;
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <Styled.TextArea
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...textareaHTMLTagProps}
        placeholder={placeholder}
      >
        {value}
      </Styled.TextArea>
    </Styled.InputWrapper>
  );
};

export default TextArea;
