import { describe, test, expect } from "@jest/globals";
import { stringEndsWith } from "./string-ends-with";

describe("Sample Test Cases", () => {
  test("Should return true or false", () => {
    expect(stringEndsWith("abcde", "cde")).toBe(true);
    expect(stringEndsWith("abcde", "abc")).toBe(false);
    expect(stringEndsWith("abc", "")).toBe(true);
  });
});
