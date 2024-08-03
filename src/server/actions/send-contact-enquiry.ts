'use server'

import { ContactSchema } from '@/types/contact-schema'
import { createSafeActionClient } from 'next-safe-action'
import { getEnquiryInContact } from './email'

const action = createSafeActionClient()

export const sendContactEnquiry = action
  .schema(ContactSchema)
  .action(
    async ({ parsedInput: { name, email, contact, company, message } }) => {
      await getEnquiryInContact(name, email, contact, company, message)
      return { success: 'Message sent successfully' }
    }
  )
