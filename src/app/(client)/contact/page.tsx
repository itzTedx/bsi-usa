import { Suspense } from 'react'
import ContactForm from './contact-form'

export default function ContactPage() {
  return (
    <Suspense fallback={'Loading...'}>
      <ContactForm />
    </Suspense>
  )
}
