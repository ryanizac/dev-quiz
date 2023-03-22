export function generateRandom<T>(values: T[]): T[] {
  return values.sort(() => Math.random() - Math.random());
}
