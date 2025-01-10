import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(32, { message: 'Name must be at most 32 characters' }),
  count: z.number().default(1),
})

