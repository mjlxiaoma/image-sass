import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge" // 合并tailwind类

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
