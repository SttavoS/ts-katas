import { describe, test, expect } from "@jest/globals";
import { booleanToString } from "./boolean-to-string";

describe("solution", () => {
  test('When we pass in true, we want the string "true" as output', () => {
    expect(booleanToString(true)).toBe("true");
  });
  test('When we pass in false, we want the string "false" as output', () => {
    expect(booleanToString(false)).toBe("false");
  });
});
