"use client"

import { z } from "zod"

export const accountRemoveSchema = z.object({
  password: z
    .string()
    .nonempty("Password is required")
})