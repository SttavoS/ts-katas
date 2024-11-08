export function past(h: number, m: number, s: number): number {
  const hoursInMiliseconds = h * 3600 * 1000;
  const minutesInMiliseconds = m * 60 * 1000;
  const secondsInMileseconds = s * 1000;
  return hoursInMiliseconds + minutesInMiliseconds + secondsInMileseconds;
}
