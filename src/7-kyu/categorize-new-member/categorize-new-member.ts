const isSenior = (age: number, handicap: number) => age >= 55 && handicap > 7;

export function openOrSenior(data: number[][]): string[] {
  return data.map((member) =>
    isSenior(member[0], member[1]) ? "Senior" : "Open",
  );
}
