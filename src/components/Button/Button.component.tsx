import React from "react";
import { Typography } from "../..";
import * as Styled from "./Button.style";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";

export interface IProps {
  /** Text of the button */
  label: string;
  /** The variant to use */
  variant: ButtonVariant;
  /** Handler function of the click event */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** If true the component is disabled */
  disabled?: boolean;
}

/** `Button` Component that allow users to take actions, and make choices, with a single tap. */
const Button: React.FC<IProps> = ({
  label,
  variant,
  onClick,
  disabled = false,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <Styled.Button variant={variant} disabled={disabled} onClick={handleClick}>
      <Typography component="span" variant="body1" weight="semiBold">
        {label}
      </Typography>
    </Styled.Button>
  );
};

export default Button;
