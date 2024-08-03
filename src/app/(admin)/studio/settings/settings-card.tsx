'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Session } from 'next-auth'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import FormError from '@/components/auth/form-error'
import FormSuccess from '@/components/auth/form-success'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { settings } from '@/server/actions/settings'
import { SettingSchema } from '@/types/settingsSchema'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { UploadButton } from '@/app/api/uploadthing/upload'

type SessionType = {
  session: Session
}

export default function SettingsCard(session: SessionType) {
  const [error, setError] = useState<string | undefined>(undefined)
  const [success, setSuccess] = useState<string | undefined>(undefined)
  const [avatarUpload, setAvatarUpload] = useState(false)

  const form = useForm<z.infer<typeof SettingSchema>>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: session.session.user?.name || undefined,
      email: session.session.user?.email || undefined,
      isTwoFactorEnabled: session.session.user?.isTwoFactorEnabled || undefined,
      image: session.session.user?.image || undefined,
    },
  })

  const { execute, status } = useAction(settings, {
    onSuccess: (data) => {
      if (data.data?.error) setError(data.data?.error)
      if (data.data?.success) setSuccess(data.data?.success)

      setError(undefined)
      setSuccess('Settings updated successfully')
    },
    onError: (error) => {
      setError('Something went wrong')
    },
  })

  function onSubmit(values: z.infer<typeof SettingSchema>) {
    execute(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Update your account settings</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      disabled={status === 'executing'}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avatar</FormLabel>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      {!form.getValues('image') && (
                        <AvatarFallback>
                          <span className="font-bold text-muted">
                            {session.session.user?.name
                              ?.charAt(0)
                              .toUpperCase()}
                          </span>
                        </AvatarFallback>
                      )}
                      {form.getValues('image') && (
                        <AvatarImage
                          src={form.getValues('image')!}
                          alt=""
                          className="object-cover"
                        />
                      )}
                    </Avatar>
                    <UploadButton
                      className="scale-90 ut-button:bg-primary/75 hover:ut-button:bg-primary/100 ut-button:transitions-all ut-label:hidden ut-allowed-content:hidden ut-button:ring-primary focus-within:ut-button:ring-offset-background"
                      endpoint="avatarUploader"
                      onUploadBegin={() => {
                        setAvatarUpload(true)
                      }}
                      onUploadError={(error) => {
                        form.setError('image', {
                          type: 'validate',
                          message: error.message,
                        })
                        setAvatarUpload(false)
                        return
                      }}
                      onClientUploadComplete={(res) => {
                        form.setValue('image', res[0].url!)
                        setAvatarUpload(false)
                        return
                      }}
                      content={{
                        button({ ready }) {
                          if (ready) return <div>Change Avatar</div>
                          return <div>Uploading...</div>
                        },
                      }}
                    />
                  </div>
                  <FormControl>
                    <Input
                      type="hidden"
                      placeholder="User image"
                      {...field}
                      disabled={status === 'executing'}
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
                      type="password"
                      placeholder="******"
                      {...field}
                      disabled={
                        status === 'executing' || session.session.user.isOAuth
                      }
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="******"
                      {...field}
                      disabled={
                        status === 'executing' || session.session.user.isOAuth
                      }
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isTwoFactorEnabled"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Two factor Authentication</FormLabel>
                  <FormDescription>
                    Enable Two Factor Authentication for your account
                  </FormDescription>
                  <FormControl>
                    <Switch
                      disabled={
                        status === 'executing' || session.session.user.isOAuth
                      }
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />

            <Button type="submit" disabled={status === 'executing'}>
              Update
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
