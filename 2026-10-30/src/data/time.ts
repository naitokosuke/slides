export function minutesToClose(filed: string, closed: string) {
  return (Date.parse(closed) - Date.parse(filed)) / 60_000;
}

export function formatMinutes(minutes: number) {
  if (minutes < 60) return `${Math.floor(minutes)}m`;
  if (minutes < 60 * 24) return `${(minutes / 60).toFixed(1)}h`;
  return `${(minutes / 60 / 24).toFixed(1)}d`;
}
