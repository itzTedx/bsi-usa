import * as z from 'zod'

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Please enter valid email',
  }),

  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
  name: z.string().min(4, { message: 'Please enter valid name' }),
})
