export function doubleChar(str: string): string {
  return str.split("").reduce((acc, sstr) => {
    return acc + sstr.repeat(2);
  }, "");
}
