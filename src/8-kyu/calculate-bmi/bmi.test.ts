import { describe, expect, test } from "vitest";
import { bmi } from "./bmi.js";

describe("Calculate BMI", () => {
	test("Should return 'Underweight'", () => {
		expect(bmi(64, 1.96)).toBe("Underweight");
		expect(bmi(70, 2.0)).toBe("Underweight");
	});

	test("Should return 'Normal'", () => {
		expect(bmi(80, 1.8)).toBe("Normal");
		expect(bmi(60, 1.6)).toBe("Normal");
	});

	test("Should return 'Underweight'", () => {
		expect(bmi(78, 1.75)).toBe("Overweight");
		expect(bmi(65, 1.54)).toBe("Overweight");
	});
	test("Should return 'Obese'", () => {
		expect(bmi(120, 1.8)).toBe("Obese");
		expect(bmi(85, 1.6)).toBe("Obese");
	});
});
