import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required")
})

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .nonempty("Password is required"),
  password2: z
    .string()
    .nonempty("Password is required")
})