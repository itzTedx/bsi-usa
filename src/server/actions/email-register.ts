'use server'

import { RegisterSchema } from '@/types/register-schema'
import { createSafeActionClient } from 'next-safe-action'
import bcrypt from 'bcrypt'
import { eq } from 'drizzle-orm'
import { users } from '../schema'
import { db } from '..'
import { generateVerificationToken } from './tokens'
import { sendVerificationEmail } from './email'

const action = createSafeActionClient()

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    //Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    //Check if email is already in the database than say it's in use, if it's not register the user but also send verification link.
    if (existingUser) {
      if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(email)

        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        )

        return { success: 'Email Confirmation resent' }
      }

      return { error: 'Email already in use' }
    }
    //Logic for when the user is not registered
    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    })

    const verificationToken = await generateVerificationToken(email)

    await sendVerificationEmail(
      verificationToken[0].email,
      verificationToken[0].token
    )

    return { success: 'Confirmation email send' }
  })
