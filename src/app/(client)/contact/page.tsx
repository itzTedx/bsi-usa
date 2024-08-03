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
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactSchema, zContactSchema } from '@/types/contact-schema'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email(),
  contact: z.string().min(10).max(14),
  company: z.string().min(1).max(256, 'Exceed the limit'),
  message: z.string().min(1).max(256, 'Exceed the limit'),
})

const ContactPage = () => {
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

  // const { execute, status } = useAction(createProduct, {
  //   onExecute: () => {
  //     setLoading(true)
  //   },
  //   onSuccess: ({ data }) => {
  //     // if (data?.success) {
  //     //   router.push('/studio/products')
  //     //   toast.success(data.success)
  //     //   setLoading(false)
  //     // }
  //   },

  //   onError: (error) => {
  //     console.log(error)
  //     setLoading(false)
  //   },
  // })
  

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
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
                    <Input placeholder="me@mail.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact No.</FormLabel>
                  <FormControl>
                    <Input placeholder="+987 654 3210" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Project Details</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="col-span-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
