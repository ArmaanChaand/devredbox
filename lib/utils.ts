import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function absoluteUrl(path: string) {

  // return `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}${path}`
  return `https://devredbox.vercel.app${path}`
}
