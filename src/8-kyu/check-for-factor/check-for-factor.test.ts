import { describe, expect, test } from "@jest/globals";
import { checkForFactor } from "./check-for-factor";

describe("Check for factor", () => {
  test("is a factor of", () => {
    expect(checkForFactor(10, 2)).toBe(true);
    expect(checkForFactor(63, 7)).toBe(true);
    expect(checkForFactor(2450, 5)).toBe(true);
    expect(checkForFactor(24612, 3)).toBe(true);
  });

  test("is not a factor of", () => {
    expect(checkForFactor(9, 2)).toBe(false);
    expect(checkForFactor(653, 7)).toBe(false);
    expect(checkForFactor(2453, 5)).toBe(false);
    expect(checkForFactor(24617, 3)).toBe(false);
  });
});
