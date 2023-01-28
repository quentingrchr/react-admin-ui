import React, { useState, FocusEvent } from "react";
import { Typography } from "../..";
import * as Styled from "./InputText.style";

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
}

/** `InputText` Describe the component */
const InputText: React.FC<IProps> = ({
  isInvalid = false,
  isValid = false,
  disabled = false,
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
  return (
    <Styled.InputWrapper
      isFocused={isFocused}
      isDisabled={disabled}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <Styled.Input
        placeholder="Enter Text Here..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
      />
      Valid
    </Styled.InputWrapper>
  );
};

export default InputText;
