export const roles = [
  "anon",
  "student",
  "teacher",
  "volunteer",
  "event_organiser",
] as const;

export type Role = (typeof roles)[number];

export function isRole(value: string): value is Role {
  return roles.includes(value as Role);
}
