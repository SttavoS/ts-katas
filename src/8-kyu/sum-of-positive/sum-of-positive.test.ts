import { describe, expect, test } from "@jest/globals";
import { positiveSum } from "./sum-of-positive";

describe("Sum of positive", () => {
  test("Should only sums positive numbers", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
  });
});
