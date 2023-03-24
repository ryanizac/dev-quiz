import { ColorKey } from "../theme";

export function getColorByPosition(positon: number): ColorKey {
  if (positon === 1) {
    return "yellow";
  }

  if (positon === 2) {
    return "blue";
  }

  if (positon === 3) {
    return "purple";
  }

  return "gray";
}
