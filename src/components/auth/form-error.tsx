import { AlertCircle } from 'lucide-react'

export default function FormError({ message }: { message?: string }) {
  if (!message) return null

  return (
    <div className="bg-destructive/50 text-secondary-foreground p-3 rounded-md flex gap-3 items-center font-medium text-sm my-2">
      <AlertCircle className="size-4" />
      <p>{message}</p>
    </div>
  )
}
