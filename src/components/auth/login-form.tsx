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

export default function LoginForms() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [error, setError] = useState('')

  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      console.log(data)
    },
  })

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-24">
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
            </div>
            <Button asChild variant="link" size="sm" className="w-fit text-xs">
              <Link href="/auth/reset">Forgot your password?</Link>
            </Button>
            <Button
              type="submit"
              disabled={status === 'executing' ? true : false}
              className={cn(status === 'executing' ? 'animate-pulse' : '')}
            >
              Continue
            </Button>
          </form>
        </Form>
      </AuthCard>
    </div>
  )
}
