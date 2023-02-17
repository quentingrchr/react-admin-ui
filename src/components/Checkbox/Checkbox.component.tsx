import React from "react";
import IconSelector from "../IconSelector";
import Label from "../Label";
import Stack from "../Stack";
import * as Styled from "./Checkbox.style";

export interface IProps {
  id: string;
  label?: string;
  value: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

/** `Checkbox` Component that display a label */
const Checkbox: React.FC<IProps> = ({
  /** Id of the label */
  id,
  /** Label of the checkbox */
  label,
  /** Value of the checkbox */
  value,
  /** Disable the input */
  disabled = false,
  /** Function called when the checkbox change */
  onChange,
}) => {
  const input = React.useRef<HTMLInputElement>(null);

  return (
    <Styled.Fieldset checked={value} disabled={disabled}>
      <Stack direction="row" spacing={6} align="center" justify="start">
        {label && <Label id={id}>{label}</Label>}
        <Styled.CheckboxInput
          type="checkbox"
          disabled={disabled}
          id={id}
          onChange={(e) => {
            if (!onChange) return;

            onChange(e.target.checked);
          }}
          ref={input}
        />
        <Styled.CheckboxLabel htmlFor={id}>
          {value && <IconSelector icon="check-filled" />}
        </Styled.CheckboxLabel>
      </Stack>
    </Styled.Fieldset>
  );
};

export default Checkbox;
