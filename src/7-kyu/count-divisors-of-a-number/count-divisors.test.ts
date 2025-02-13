import { describe, test, expect } from "@jest/globals";
import { divisors } from "./count-divisors";

describe("Count the divisors of a number", () => {
  test("basic tests", () => {
    expect(divisors(1)).toBe(1);
    expect(divisors(10)).toBe(4);
    expect(divisors(11)).toBe(2);
    expect(divisors(54)).toBe(8);
    expect(divisors(64)).toBe(7);
  });
});
