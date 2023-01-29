import React from "react";
import { IconName } from "../../types";
import * as Icons from "../../assets/icons";

export interface IProps {
  /** The icon to use */
  icon: IconName;
}

function selector(icon: IProps["icon"]): ReturnType<React.FC> {
  switch (icon) {
    case "refresh-outlined":
      return <Icons.RefreshOutlined />;
    default:
      throw new Error(`Icon ${icon} not found`);
  }
}

const IconSelector: React.FC<IProps> = ({ icon }) => {
  return selector(icon);
};

export default IconSelector;
