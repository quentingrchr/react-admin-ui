import React from "react";
import * as Styled from "./Icon.style";
import { IconName } from "../../types";
import IconSelector from "./IconSelector.component";

export interface IProps {
  /** The icon to use */
  icon: IconName;
}

/** `Icon` Component to display a specfic icon*/
const Icon: React.FC<IProps> = ({ icon }) => {
  return (
    <Styled.Container>
      <IconSelector icon={icon} />
    </Styled.Container>
  );
};

export default Icon;
