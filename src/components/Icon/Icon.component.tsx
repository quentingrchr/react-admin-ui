import React from "react";
import * as Styled from "./Icon.style";
import { ColorStringInterpolation, IconID } from "../../types";
import IconSelector from "../IconSelector";
import theme from "../../shared/styles/theme";

export interface IProps {
  /** The icon to use */
  icon: IconID;
  /** Color of the icon */
  color?: ColorStringInterpolation;
  /** Size of the icon */
  size?: keyof typeof theme["icon"]["size"];
  /** The function to call when the icon is cliked */
  onClick?: () => void;
}

/** `Icon` Component to display a specfic icon*/
const Icon: React.FC<IProps> = ({
  icon,
  color,
  size = "medium",
  onClick = () => {},
}) => {
  console.log("Icon", icon, color, size);
  return (
    <Styled.Container color={color} size={size} onClick={onClick}>
      <IconSelector icon={icon} />
    </Styled.Container>
  );
};

export default Icon;
