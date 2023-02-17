import React from "react";
import { Typography } from "../..";
import * as Styled from "./Label.style";

export interface IProps {
  id: string;
  children: React.ReactNode;
}

/** `Label` Component taht display a label */
const Label: React.FC<IProps> = ({
  /** Id of the label */
  id,
  /** Content of the label */
  children,
}) => {
  return (
    <Styled.Label htmlFor={id}>
      <Typography variant="body2" weight="semiBold" component="span">
        {children}
      </Typography>
    </Styled.Label>
  );
};

export default Label;
