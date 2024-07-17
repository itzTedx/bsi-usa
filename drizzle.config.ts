import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

export default defineConfig({
  schema: './src/server/schema.ts',
  out: './src/server/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.NEONDB_URL!,
  },
})
