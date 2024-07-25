'use server'

import { eq } from 'drizzle-orm'
import { db } from '..'
import { emailTokens, passwordResetToken, users } from '../schema'

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.query.emailTokens.findFirst({
      where: eq(emailTokens.token, email),
    })

    return verificationToken
  } catch (error) {
    return null
  }
}

export const generateVerificationToken = async (email: string) => {
  const token = crypto.randomUUID()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.delete(emailTokens).where(eq(emailTokens.id, existingToken.id))
  }

  const verificationToken = await db
    .insert(emailTokens)
    .values({
      email,
      token,
      expires,
    })
    .returning()
  return verificationToken
}

export const verifyEmailToken = async (token: string) => {
  const existingToken = await getVerificationTokenByEmail(token)
  if (!existingToken) return { error: 'Token not found' }

  const hasExpired = new Date(existingToken.expires) < new Date()
  if (hasExpired) return { error: 'Token has been expired. Please try again' }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, existingToken.email),
  })
  if (!existingUser) return { error: 'Email does not exists' }
  await db.update(users).set({
    emailVerified: new Date(),
    email: existingToken.email,
  })

  await db.delete(emailTokens).where(eq(emailTokens.id, existingToken.id))
  return { success: 'Email Verified' }
}

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetTokens = await db.query.passwordResetToken.findFirst({
      where: eq(passwordResetToken.token, token),
    })
    return passwordResetTokens
  } catch {
    return null
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetTokens = await db.query.passwordResetToken.findFirst({
      where: eq(passwordResetToken.email, email),
    })

    return passwordResetTokens
  } catch {
    return null
  }
}

export const generatePasswordResetToken = async (email: string) => {
  try {
    const token = crypto.randomUUID()

    const expires = new Date(new Date().getTime() * 3600 * 1000)

    const existingToken = await getPasswordResetTokenByEmail(email)
    if (existingToken) {
      await db
        .delete(passwordResetToken)
        .where(eq(passwordResetToken.id, emailTokens.id))
    }
    const passwordResetTokens = await db
      .insert(passwordResetToken)
      .values({
        email,
        token,
        expires,
      })
      .returning()

    return passwordResetTokens
  } catch (e) {
    return null
  }
}
