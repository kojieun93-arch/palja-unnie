import type { Gender } from "@/components/consult/types";

/** Client-only key. Stores gender for address terms — never birth data. */
const GENDER_KEY = "palja.consult.gender";

export function saveConsultGender(gender: Gender): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(GENDER_KEY, gender);
}

export function readConsultGender(): Gender | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(GENDER_KEY);
  if (value === "female" || value === "male") return value;
  return null;
}

export function clearConsultGender(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(GENDER_KEY);
}

export function addressForGender(gender: Gender | null): "언니" | "오빠" | "" {
  if (gender === "female") return "언니";
  if (gender === "male") return "오빠";
  return "";
}
