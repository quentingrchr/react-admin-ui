import React from "react";
import * as Styled from "./Tooltip.style";
import { ColorStringInterpolation, TooltipType } from "../../types";
import Typography from "../Typography";
import IconSelector from "../IconSelector";

export interface IProps {
  type: TooltipType;
  text: string;
}

/** `Tooltip` Describe the component */
const Tooltip: React.FC<IProps> = ({
  /** The type of the tooltip */
  type,
  /** The text of the tooltip */
  text,
}) => {
  const getColorFromType = (type: TooltipType): ColorStringInterpolation => {
    switch (type) {
      case "default":
        return "secondary-neutral4";
      case "error":
        return "secondary-danger";
      case "success":
        return "secondary-success";
      default:
        return "secondary-neutral4";
    }
  };

  return (
    <Styled.Container color={getColorFromType(type)}>
      <IconSelector icon="information-circle-outlined" />
      <Typography variant="body2" weight="regular" component="span">
        {text}
      </Typography>
    </Styled.Container>
  );
};

export default Tooltip;
