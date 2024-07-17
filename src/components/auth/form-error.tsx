import { AlertCircle } from 'lucide-react'

export default function FormError({ message }: { message?: string }) {
  return (
    <div className="bg-destructive text-secondary-foreground p-3 rounded-md">
      <AlertCircle className="size-4" />
      <p>{message}</p>
    </div>
  )
}
