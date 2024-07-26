import NewPasswordForm from '@/components/auth/new-password-form'
import { Suspense } from 'react'

export default function NewPass() {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  )
}
