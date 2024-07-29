import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.floor(bytes / Math.pow(k, i)) + ' ' + sizes[i];
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

// Example usage:
// const longFileName = "this_is_a_very_long_file_name_that_needs_to_be_truncated.txt";
// const truncatedFileName = truncateFileName(longFileName, 30);
// console.log(truncatedFileName); // Output: "this_is_a_ve...ame.txt"
