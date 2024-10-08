export function getGrade(a: number, b: number, c: number): string {
	const score = (a + b + c) / 3;

	if (score <= 100 && score >= 90) {
		return "A";
	} else if (score < 90 && score >= 80) {
		return "B";
	} else if (score < 80 && score >= 70) {
		return "C";
	} else if (score < 70 && score >= 60) {
		return "D";
	} else {
		return "F";
	}
}
