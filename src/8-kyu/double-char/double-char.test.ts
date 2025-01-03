import { describe, test, expect } from "@jest/globals";
import { doubleChar } from "./double-char";

describe("Double Char", () => {
  test("works for some examples", () => {
    expect(doubleChar("abcd")).toBe("aabbccdd");
    expect(doubleChar("Adidas")).toBe("AAddiiddaass");
    expect(doubleChar("1337")).toBe("11333377");
    expect(doubleChar("illuminati")).toBe("iilllluummiinnaattii");
    expect(doubleChar("123456")).toBe("112233445566");
    expect(doubleChar("%^&*(")).toBe("%%^^&&**((");
  });
});
