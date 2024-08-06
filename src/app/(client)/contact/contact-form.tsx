'use client'

import { zodResolver } from '@hookform/resolvers/zod'
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
import { Textarea } from '@/components/ui/textarea'
import { ContactSchema, zContactSchema } from '@/types/contact-schema'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { sendContactEnquiry } from '@/server/actions/send-contact-enquiry'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  contact: z.string().min(10).max(14),
  company: z.string().min(1).max(256, 'Exceed the limit'),
  message: z.string().min(1).max(256, 'Exceed the limit'),
})

const ContactForm = () => {
  const form = useForm<zContactSchema>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      contact: '',
      company: '',
      message: '',
    },
  })

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const item = searchParams.get('product')

  if (item) {
    form.setValue(
      'message',
      `Product Enquiry \nProduct: ${item}\n \nCould you please provide me with more information about it.`
    )
  }

  const { execute, status } = useAction(sendContactEnquiry, {
    onExecute: () => {
      setLoading(true)
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        router.refresh()
        toast.success(data.success)
        setLoading(false)
      }
    },

    onError: (error) => {
      console.log(error)
      setLoading(false)
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    execute(values)
  }
  return (
    <>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold uppercase">
        Contact Us
      </h2>
      <div className="max-w-6xl md:mx-auto my-12 bg-accent p-6 rounded-xl mx-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-9"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-background">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" type="text" {...field} />
                  </FormControl>
                  <FormMessage className="text-background" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-background">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="me@mail.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage className="text-background" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-background">Contact No.</FormLabel>
                  <FormControl>
                    <Input placeholder="+987 654 3210" type="tel" {...field} />
                  </FormControl>
                  <FormMessage className="text-background" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-background">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage className="text-background" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel className="text-background">
                    Project Details
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-background" />
                </FormItem>
              )}
            />
            <Button type="submit" className="col-span-full" disabled={loading}>
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ContactForm
