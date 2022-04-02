export function randRange(start: number, end: number) {
  const range = end - start;
  return Math.floor(Math.random() * (range + 1) + start);
}