import z from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.url()
})

const result = envSchema.safeParse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
})

if (!result.success) {
  console.error('Invalid Environment Variables: ', result.error.message)
  throw new Error('Invalid Environment Variables')
}

export const env = result.data
