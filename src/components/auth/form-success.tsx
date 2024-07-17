import { CheckCircle } from 'lucide-react'

export default function FormSuccess({ message }: { message?: string }) {
  return (
    <div className="bg-green-400/50 text-secondary-foreground p-3 rounded-md flex gap-3 items-center font-medium text-sm mt-2 mb-4">
      <CheckCircle className="size-4" />
      <p>{message}</p>
    </div>
  )
}
