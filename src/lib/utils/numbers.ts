export function safeParseInt(str: string | null) {
  if (!str) return null;
  const parsed = Number.parseInt(str, 10);
  return Number.isNaN(parsed) ? null : parsed;
}
