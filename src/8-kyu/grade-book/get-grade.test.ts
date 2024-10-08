import { describe, expect, test } from "vitest";
import { getGrade } from "./get-grade";

describe("Grade book", () => {
  test("Should return an A", () => {
    expect(getGrade(95, 90, 93)).toBe("A");
    expect(getGrade(100, 85, 96)).toBe("A");
    expect(getGrade(92, 93, 94)).toBe("A");
    expect(getGrade(100, 100, 100)).toBe("A");
  });

  test("Should return an B", () => {
    expect(getGrade(70, 70, 100)).toBe("B");
    expect(getGrade(82, 85, 87)).toBe("B");
    expect(getGrade(84, 79, 85)).toBe("B");
  });

  test("Should return an C", () => {
    expect(getGrade(70, 70, 70)).toBe("C");
    expect(getGrade(75, 70, 79)).toBe("C");
    expect(getGrade(60, 82, 76)).toBe("C");
  });

  test("Should return an D", () => {
    expect(getGrade(65, 70, 59)).toBe("D");
    expect(getGrade(66, 62, 68)).toBe("D");
    expect(getGrade(58, 62, 70)).toBe("D");
  });

  test("Should return an F", () => {
    expect(getGrade(44, 55, 52)).toBe("F");
    expect(getGrade(48, 55, 52)).toBe("F");
    expect(getGrade(58, 59, 60)).toBe("F");
    expect(getGrade(0, 0, 0)).toBe("F");
  });
});
