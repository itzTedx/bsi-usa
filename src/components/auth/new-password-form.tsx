'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { cn } from '@/lib/utils'
import { newPassword } from '@/server/actions/new-password'
import { NewPasswordSchema } from '@/types/new-password-schema'
import { useState } from 'react'
import AuthCard from './auth-card'
import FormError from './form-error'
import FormSuccess from './form-success'

export default function NewPasswordForm() {
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const { execute, status } = useAction(newPassword, {
    onSuccess(data) {
      if (data.data?.error) setError(data.data?.error)
      if (data.data?.success) setSuccess(data.data?.success)
    },
  })

  function onSubmit(values: z.infer<typeof NewPasswordSchema>) {
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-14">
      <AuthCard
        cardTitle="Enter a new password"
        cardDesc="to continue using Home"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="gap-y-2 flex flex-col"
          >
            <div className="gap-y-4 flex flex-col">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter new password"
                        {...field}
                        type="password"
                        disabled={status === 'executing'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormSuccess message={success} />
              <FormError message={error} />
            </div>

            <Button
              type="submit"
              disabled={status === 'executing' ? true : false}
              className={cn(
                status === 'executing' ? 'animate-pulse' : '',
                'mt-4'
              )}
            >
              Reset Password
            </Button>
          </form>
        </Form>
      </AuthCard>
    </div>
  )
}
