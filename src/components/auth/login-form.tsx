'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { useAction } from 'next-safe-action/hooks'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/types/login-schema'
import AuthCard from './auth-card'
import { emailSignIn } from '@/server/actions/email-signin'
import { cn } from '@/lib/utils'
import FormError from './form-error'
import FormSuccess from './form-success'
import { useState } from 'react'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'

export default function LoginForms() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showTwoFactor, setShowTwoFactor] = useState(false)

  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      if (data.data?.error) setError(data.data?.error)
      if (data.data?.twoFactor) {
        setShowTwoFactor(true)
      }
      if (data.data?.success) setSuccess(data.data?.success)
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-14">
      <AuthCard
        cardTitle="Sign in"
        cardDesc="to continue using Home"
        backButtonHref="/auth/register"
        backButtonLabel="Create a new account"
        showSocials={true}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-y-2 flex flex-col"
          >
            <div className="gap-y-4 flex flex-col">
              {showTwoFactor && (
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        We{`'`}ve sent you a two factor code to your email
                      </FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={6}
                          disabled={status === 'executing'}
                          {...field}
                        >
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {!showTwoFactor && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter email address"
                            {...field}
                            type="email"
                            autoComplete="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="**********"
                            {...field}
                            type="password"
                            autoComplete="current-password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormSuccess message={success} />
              <FormError message={error} />
            </div>
            <Button
              asChild
              variant="link"
              size="sm"
              className="w-fit text-xs px-0"
            >
              <Link href="/auth/reset">Forgot your password?</Link>
            </Button>
            <Button
              type="submit"
              disabled={status === 'executing' ? true : false}
              className={cn(status === 'executing' ? 'animate-pulse' : '')}
            >
              {showTwoFactor ? 'Verify' : 'Continue'}
            </Button>
          </form>
        </Form>
      </AuthCard>
    </div>
  )
}
