import { describe, expect, test } from "vitest";
import { hoopCount } from "./hoop-count";

describe("Keep up the hoop", () => {
	test("Should return the correct text", () => {
		expect(hoopCount(6)).toBe("Keep at it until you get it");
		expect(hoopCount(10)).toBe("Great, now move on to tricks");
		expect(hoopCount(22)).toBe("Great, now move on to tricks");
	});
});
