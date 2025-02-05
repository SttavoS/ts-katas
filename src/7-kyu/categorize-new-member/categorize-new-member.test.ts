import { describe, test, expect } from "@jest/globals";
import { openOrSenior } from "./categorize-new-member";

describe("Basic tests", () => {
  test("Fixed tests", () => {
    expect(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
    ).toEqual(["Open", "Senior", "Open", "Senior"]);
    expect(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
      ]),
    ).toEqual(["Open", "Open", "Open", "Open"]);
    expect(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
    ).toEqual(["Senior", "Open", "Open", "Open"]);
  });
});
