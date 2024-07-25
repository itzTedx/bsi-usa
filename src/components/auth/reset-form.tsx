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
import { reset } from '@/server/actions/password-reset'
import { ResetSchema } from '@/types/reset-schema'
import { useState } from 'react'
import AuthCard from './auth-card'
import FormError from './form-error'
import FormSuccess from './form-success'

export default function ResetForm() {
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const { execute, status } = useAction(reset, {
    onSuccess(data) {
      if (data.data?.error) setError(data.data?.error)
      if (data.data?.success) setSuccess(data.data?.success)
    },
  })

  function onSubmit(values: z.infer<typeof ResetSchema>) {
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-14">
      <AuthCard
        cardTitle="Forgot your password?"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter new email"
                        {...field}
                        type="email"
                        autoComplete="email"
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
