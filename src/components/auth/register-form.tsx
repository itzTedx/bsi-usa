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
import { emailRegister } from '@/server/actions/email-register'
import { RegisterSchema } from '@/types/register-schema'
import { useState } from 'react'
import AuthCard from './auth-card'
import FormSuccess from './form-success'
import FormError from './form-error'

export default function RegisterFom() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const { execute, status } = useAction(emailRegister, {
    onSuccess(data) {
      if (data.data?.error) setError(data.data?.error)
      if (data.data?.success) setSuccess(data.data?.success)
    },
  })

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    console.log('Before server action runs')
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-12">
      <AuthCard
        cardTitle="Create a new account"
        cardDesc="to continue using Home"
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account? Login"
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@email.com"
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
              {success && <FormSuccess message={success} />}
              {error && <FormError message={error} />}
            </div>

            <Button
              type="submit"
              disabled={status === 'executing' ? true : false}
              className={cn(status === 'executing' ? 'animate-pulse' : '')}
            >
              Register
            </Button>
          </form>
        </Form>
      </AuthCard>
    </div>
  )
}
