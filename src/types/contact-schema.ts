import * as z from 'zod'

export const ContactSchema =  z.object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email(),
    contact: z.string().min(10).max(14),
    company: z.string().min(1).max(256, 'Exceed the limit'),
    message: z.string().min(1).max(256, 'Exceed the limit'),
  })

export type zContactSchema = z.infer<typeof ContactSchema>
