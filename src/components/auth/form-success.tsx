import { CheckCircle } from 'lucide-react'

export default function FormSuccess({ message }: { message?: string }) {
  return (
    <div className="bg-teal-400 text-secondary-foreground p-3 rounded-md">
      <CheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  )
}
