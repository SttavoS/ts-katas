import { describe, test, expect } from "@jest/globals";
import { addBinary } from "./binary-addition";

describe("addBinary", () => {
  test('Should return "10"', () => {
    expect(addBinary(1, 1)).toBe("10");
  });
  test('Should return "11"', () => {
    expect(addBinary(1, 2)).toBe("11");
  });
  test('Should return "1110"', () => {
    expect(addBinary(5, 9)).toBe("1110");
  });
});
