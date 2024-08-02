import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Math.floor(bytes / Math.pow(k, i)) + ' ' + sizes[i]
}

export function truncateFileName(fileName: string, maxLength: number): string {
  // Split the file name and extension
  const dotIndex = fileName.lastIndexOf('.')
  if (dotIndex === -1) {
    // No extension found, treat the entire string as the file name
    if (fileName.length > maxLength) {
      return fileName.slice(0, maxLength - 3) + '...'
    }
    return fileName
  }

  const name = fileName.slice(0, dotIndex)
  const extension = fileName.slice(dotIndex)

  // Calculate the length of the truncated name part
  const availableLength = maxLength - extension.length - 6 // 3 for the start, 3 for the end

  if (name.length > availableLength + 3) {
    const start = name.slice(0, Math.floor(availableLength / 2))
    const end = name.slice(-3)
    return start + '...' + end + extension
  } else {
    return fileName
  }
}

export function slugify(title: string): string {
  return title
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/[^\w\s-]/g, '') // Remove non-alphanumeric characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
}

export function getCurrentTime(): string {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  const strHours = hours.toString().padStart(2, '0')
  return `${strHours}:${minutes} ${ampm}`
}
