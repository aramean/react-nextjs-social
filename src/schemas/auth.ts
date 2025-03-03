import { z } from "zod"

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required")
})