import React from "react";
import { Typography } from "../..";
import * as Styled from "./Button.style";
import { ColorStringInterpolation, IconID } from "../../types";
import Stack from "../Stack";
import IconSelector from "../IconSelector";

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
  /** Left icon in the component */
  leftIcon?: IconID;
  /** Right icon in the component */
  rightIcon?: IconID;
}

/** `Button` Component that allow users to take actions, and make choices, with a single tap. */
const Button: React.FC<IProps> = ({
  label,
  variant,
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event);
    }
  };
  function getIconColor(): ColorStringInterpolation {
    if (variant === "primary") {
      return "primary-white";
    }
    if (variant === "secondary") {
      return "primary-brand";
    }
    if (variant === "tertiary") {
      return "primary-black";
    }
    if (variant === "destructive") {
      return "primary-white";
    }
    return "primary-white";
  }

  return (
    <Styled.Button variant={variant} disabled={disabled} onClick={handleClick}>
      <Stack direction="row" spacing={6} justify={"between"}>
        {leftIcon && <IconSelector icon={leftIcon} />}
        <Typography component="span" variant="body1" weight="semiBold">
          {label}
        </Typography>
        {rightIcon && <IconSelector icon={rightIcon} />}
      </Stack>
    </Styled.Button>
  );
};

export default Button;
