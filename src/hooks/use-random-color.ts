import { ColorKey } from "../theme";
import { useRandom } from "./use-random";

const colors: ColorKey[] = ["blue", "green", "pink", "purple"];

export function useRandomColor() {
  const [randomValues] = useRandom(colors);
  return randomValues;
}
