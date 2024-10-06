import { expect, test } from "vitest";
import { squareSum } from './square-sum.ts';

test('Should sum all numbers by square', () => {
  expect(squareSum([1, 2])).toBe(5)
  expect(squareSum([0, 3, 4, 5])).toBe(50)
  expect(squareSum([])).toBe(0)
})
