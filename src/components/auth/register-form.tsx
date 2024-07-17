'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import Link from 'next/link'
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
import { emailSignIn } from '@/server/actions/email-signin'
import { RegisterSchema } from '@/types/register-schema'
import { useState } from 'react'
import AuthCard from './auth-card'
import { emailRegister } from '@/server/actions/email-register'

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
  const { execute, status } = useAction(emailRegister, {
    onSuccess(data) {
      console.log(data)
    },
  })

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    execute(values)
  }

  return (
    <div className="container grid place-content-center mt-24">
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
