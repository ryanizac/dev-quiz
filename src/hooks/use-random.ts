import { useState } from "react";
import { generateRandom } from "../util";

export function useRandom<T>(values: T[]) {
  return useState(() => generateRandom(values));
}
