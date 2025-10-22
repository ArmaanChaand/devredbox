import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SITE_ORIGIN } from "./info"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path: string) {

  return SITE_ORIGIN + `${path}`
}
