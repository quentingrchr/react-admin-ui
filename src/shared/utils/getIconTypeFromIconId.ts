import { IconID, IconType } from "../../types";

function getIconTypeFromIconId(iconId: IconID): IconType {
  const iconTypeToArray = iconId.split("-");
  const iconType = iconTypeToArray[iconTypeToArray.length - 1] as IconType;
  return iconType;
}

export default getIconTypeFromIconId;
