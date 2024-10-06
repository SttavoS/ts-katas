export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, number) => acc + Math.pow(number, 2), 0);
}
