/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { verifyEmailToken } from '@/server/actions/tokens'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import AuthCard from './auth-card'
import FormSuccess from './form-success'
import FormError from './form-error'

export default function EmailVerificationForm() {
  const token = useSearchParams().get('token')
  const router = useRouter()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleVerification = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('No token found')
      return
    }
    verifyEmailToken(token).then((data) => {
      if (data.error) {
        setError(data.error)
      }
      if (data.success) {
        toast.success(success)
        setSuccess(data.success)
        router.push('/auth/login')
      }
    })
  }, [])

  useEffect(() => {
    handleVerification()
  }, [])

  return (
    <AuthCard
      cardTitle="Verify your account"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center flex-col justify-center w-full">
        <p>{!success && !error ? 'Verifying Token...' : null}</p>
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </AuthCard>
  )
}
