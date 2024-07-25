'use server'

import { NewPasswordSchema } from '@/types/new-password-schema'
import { createSafeActionClient } from 'next-safe-action'
import { getPasswordResetTokenByToken } from './tokens'
import { db } from '..'
import { eq } from 'drizzle-orm'
import { passwordResetToken, users } from '../schema'
import bcrypt from 'bcrypt'

const action = createSafeActionClient()

export const newPassword = action
  .schema(NewPasswordSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    if (!token) {
      return { error: 'Missing Token' }
    }
    //here we need to check if the token is valid
    const existingToken = await getPasswordResetTokenByToken(token)
    if (!existingToken) {
      return { error: 'Token not Found' }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()
    if (hasExpired) {
      return { error: 'Token has expired' }
    }

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, existingToken.email),
    })

    if (!existingUser) {
      return { error: 'User not found' }
    }

    const hashedPasswords = await bcrypt.hash(password, 10)

    //Update the password
    await db.transaction(async (tx) => {
      await tx
        .update(users)
        .set({
          password: hashedPasswords,
        })
        .where(eq(users.id, existingUser.id))

      await tx
        .delete(passwordResetToken)
        .where(eq(passwordResetToken.id, existingToken.id))
    })
    return { success: 'Password Updated' }
  })
