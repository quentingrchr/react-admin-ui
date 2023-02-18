import React from "react";
import IconSelector from "../IconSelector";
import * as Styled from "./Checkbox.style";

export interface IProps {
  checked?: boolean;
  onClick?: () => void;
}

/** `Checkbox` Component that display a label */
const Checkbox: React.FC<IProps> = ({
  /** Whether the checkbox is checked */
  checked = false,
  /** Function called when the checkbox is clicked */
  onClick,
}) => {
  const handleClick = () => {
    if (!onClick) return;
    onClick();
  };

  return (
    <Styled.Checkbox
      checked={checked}
      onClick={handleClick}
      hasAction={onClick !== undefined}
    >
      {checked && <IconSelector icon="check-filled" />}
    </Styled.Checkbox>
  );
};

export default Checkbox;
