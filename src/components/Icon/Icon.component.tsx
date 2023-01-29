import React from "react";
import * as Styled from "./Icon.style";
import { ColorStringInterpolation, IconID } from "../../types";
import IconSelector from "../IconSelector";

export interface IProps {
  /** The icon to use */
  icon: IconID;
  /** Color of the icon */
  color?: ColorStringInterpolation;
}

/** `Icon` Component to display a specfic icon*/
const Icon: React.FC<IProps> = ({ icon, color }) => {
  return (
    <Styled.Container color={color}>
      <IconSelector icon={icon} />
    </Styled.Container>
  );
};

export default Icon;
