import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeClassesByWord(
  classes: string,
  wordToRemove: string,
): string {
  const escapedWord = wordToRemove.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const wordRegex = new RegExp(`\\b[\\w-]*${escapedWord}[\\w-]*\\b`, "g");
  return classes
    .replace(wordRegex, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
