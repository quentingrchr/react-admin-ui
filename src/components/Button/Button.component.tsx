import React from "react";
import { Typography } from "../..";
import * as Styled from "./Button.style";
import { ColorStringInterpolation, IconID } from "../../types";
import Stack from "../Stack";
import IconSelector from "../IconSelector";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive"
  | "link";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  /** Type of the button HTML element */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  /** Title of the button HTML element */
  title?: React.ButtonHTMLAttributes<HTMLButtonElement>["title"];
}

/** `Button` Component that allow users to take actions, and make choices, with a single tap. */
const Button: React.FC<IProps> = ({
  label,
  variant,
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
  title = label,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <Styled.Button
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      title={title}
      type={type}
    >
      <Stack direction="row" spacing={6} justify={"between"}>
        {leftIcon && (
          <Styled.IconContainer>
            <IconSelector icon={leftIcon} />
          </Styled.IconContainer>
        )}
        <Typography component="span" variant="body1" weight="semiBold">
          {label}
        </Typography>
        {rightIcon && (
          <Styled.IconContainer>
            <IconSelector icon={rightIcon} />
          </Styled.IconContainer>
        )}
      </Stack>
    </Styled.Button>
  );
};

export default Button;
