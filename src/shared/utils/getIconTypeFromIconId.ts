import { IconID, IconType } from "../../types";

function getIconTypeFromIconId(iconId: IconID): IconType {
  const iconType = iconId.split("-")[0] as IconType;
  return iconType;
}

export default getIconTypeFromIconId;
