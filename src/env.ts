import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url().min(1),
  DATABASE_HOST: z.string().min(1),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
  API_BASE_URL: z.string(),
  AUTH_REDIRECT_URL: z.string(),
  JWT_SECRET_KEY: z.string(),
})

export const env = envSchema.parse(Bun.env)
