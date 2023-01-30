import React from "react";
import { Typography } from "../..";
import * as Styled from "./Link.style";

export interface IProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Text of the button */
  label: string;
  /** The url the component should point to */
  href: React.AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  /** If true the component is disabled */
  disabled?: boolean;
  /** Specifies where to open the linked document */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"];
}

/** `Link` Component that allow users to navigate to another page */
const Link: React.FC<IProps> = ({
  label,
  href,
  disabled = false,
  ...aHTMLTagProps
}) => {
  return (
    <Styled.Link disabled={disabled} href={href} {...aHTMLTagProps}>
      <Typography component="span" variant="body1" weight="semiBold">
        {label}
      </Typography>
    </Styled.Link>
  );
};

export default Link;
