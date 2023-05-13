export default function randomInt(start: number, end: number): number {
  const range = end - start;
  const randomRange = Math.random() * range;

  return Math.floor(start + randomRange);
}
