export function divisors(n: number): number {
  // Alternative solution
  // return new Array(n)
  //   .fill(0)
  //   .map((_, i) => i + 1)
  //   .filter((x) => n % x == 0)
  //   .reduce((m) => m + 1, 0);

  const divisors = [];
  for (let index = 1; index <= n; index++) {
    if (n % index == 0) {
      divisors.push(index);
    }
  }

  return divisors.length;
}
