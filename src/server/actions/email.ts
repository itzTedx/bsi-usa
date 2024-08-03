'use server'

import getBaseURL from '@/lib/base-url'
import { Resend } from 'resend'
import { string } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)
const domain = getBaseURL()

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`
  const { data, error } = await resend.emails.send({
    from: 'BSI <onboarding@bsi-usa.com>',
    to: email,
    subject: 'BSI - Confirmation Link',
    html: `<p>Click to <a href='${confirmLink}'>confirm your email.</a></p>`,
  })

  if (error) {
    return console.log(error)
  }

  if (data) return data
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-password?token=${token}`
  const { data, error } = await resend.emails.send({
    from: 'BSI <onboarding@bsi-usa.com>',
    to: email,
    subject: 'BSI - Password Reset Link',
    html: `<p>Click here to <a href='${confirmLink}'>reset your password.</a></p>`,
  })

  if (error) return console.log(error)

  if (data) return data
}

export const sendTwoFactorTokenByEmail = async (
  email: string,
  token: string
) => {
  const { data, error } = await resend.emails.send({
    from: 'BSI <onboarding@bsi-usa.com>',
    to: email,
    subject: 'BSI - Your two factor token',
    html: `<p>Your Confirmation Code: ${token}</p>`,
  })

  if (error) {
    return console.log(error)
  }

  if (data) return data
}

export const getEnquiryInContact = async (
  name: string,
  email: string,
  contact: string,
  company: string,
  message: string
) => {
  const { data, error } = await resend.emails.send({
    from: 'BSI <onboarding@bsi-usa.com>',
    to: 'melwinafs@gmail.com',
    subject: `Enquiry from ${name}`,
    html: `<p>${message}</p>`,
  })

  if (error) {
    return console.log(error)
  }

  if (data) return data
}
