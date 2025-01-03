import { describe, expect, test } from "@jest/globals";
import { lovefunc } from "./opposites-attract";

describe("Opposites Attract", () => {
  test("Basic tests", () => {
    expect(lovefunc(1, 4)).toBe(true);
    expect(lovefunc(2, 2)).toBe(false);
    expect(lovefunc(0, 1)).toBe(true);
    expect(lovefunc(0, 0)).toBe(false);
  });
});
