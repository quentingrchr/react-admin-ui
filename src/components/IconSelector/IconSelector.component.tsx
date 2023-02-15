import React from "react";
import { IconID } from "../../types";
import * as Icons from "../../assets/icons";
import * as Styled from "./IconSelector.style";
import { getIconTypeFromIconId } from "../../shared/utils";

export interface IProps {
  /** The icon to use */
  icon: IconID;
}

function selector(icon: IProps["icon"]): ReturnType<React.FC> {
  switch (icon) {
    case "refresh-outlined":
      return <Icons.RefreshOutlined />;
    case "refresh-filled":
      return <Icons.RefreshFilled />;
    case "search-outlined":
      return <Icons.SearchOutlined />;
    case "search-filled":
      return <Icons.SearchFilled />;
    case "information-circle-outlined":
      return <Icons.InformationCircleOutlined />;
    case "information-circle-filled":
      return <Icons.InformationCircleFilled />;
    case "photograph-filled":
      return <Icons.PhotographFilled />;
    case "photograph-outlined":
      return <Icons.PhotographOutlined />;
    default:
      throw new Error(`Icon ${icon} not found`);
  }
}

const IconSelector: React.FC<IProps> = ({ icon }) => {
  const iconType = getIconTypeFromIconId(icon);
  return (
    <Styled.Container iconType={iconType}>{selector(icon)}</Styled.Container>
  );
};

export default IconSelector;
