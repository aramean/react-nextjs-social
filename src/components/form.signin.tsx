import { useState } from "react"
import { useLogin } from "@/hooks/useLogin"
import Button from "@/components/partials/button"
import Heading from "@/components/partials/heading"
import InputText from "@/components/partials/inputText"
import InputPassword from "@/components/partials/inputPassword"
import Logo from "@/components/partials/logo"
import Alert from "@/components/partials/alert"
import { z } from "zod"

interface FormSignInProps {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
}

const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required")
})

const FormSignIn = ({ email, setEmail, password, setPassword }: FormSignInProps) => {
  const [formErrors, setFormErrors] = useState<{ email?: string; password?: string }>({})
  const { isLoading, error, login } = useLogin()

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = signInSchema.safeParse({ email, password })

    if (!result.success) {
      const validationErrors = result.error.errors.reduce(
        (acc, { path, message }) => ({ ...acc, [path[0]]: message }),
        {}
      )
      setFormErrors(validationErrors)
      return
    }

    return await login(email, password)
  }

  return (
    <div className="flex flex-col w-full items-center">
      <Logo />
      <div className="flex flex-row self-center items-end">
        <Heading text="NEXT" size="4xl" />
        <Heading text="social" size="3xl" />
      </div>
      <div className="text-center mt-3">
        Open Source Social Network.
      </div>
      {error && <Alert message={error} />}
      <form className="grid gap-3 w-full size-auto mt-5" onSubmit={(event) => handleLogin(event)}>
        <InputText
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors?.email && <small className="text-red-500">{formErrors.email}</small>}
        <InputPassword
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors?.password && <small className="text-red-500">{formErrors.password}</small>}
        <Button value="Sign in" disabled={isLoading} />
      </form>
    </div>)
}

export default FormSignIn