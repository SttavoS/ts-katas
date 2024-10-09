export function positiveSum(numbers: number[]): number {
  return numbers
    .filter(num => num > 0)
    .reduce((acc, num) => {
    return acc + num;
  }, 0);
}
