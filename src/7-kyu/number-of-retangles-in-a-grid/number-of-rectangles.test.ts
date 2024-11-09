import { describe, test, expect } from "vitest";
import { numberOfRectangles } from "./number-of-rectangles";

describe("Number of Rectangles in a Grid", () => {
  test("Fixed tests", () => {
    expect(numberOfRectangles(4, 4)).toBe(100);
    expect(numberOfRectangles(5, 5)).toBe(225);
    expect(numberOfRectangles(1636, 105)).toBe(7451902290);
  });
});
