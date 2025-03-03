"use client"

import { useState } from "react"
import Link from "next/link"
import { useSignup } from "@/hooks/useSignup"
import { signUpSchema } from "@/schemas/auth"
import Button from "@/components/partials/button"
import Heading from "@/components/partials/heading"
import InputText from "@/components/partials/inputText"
import InputPassword from "@/components/partials/inputPassword"
import CheckBox from "@/components/partials/checkbox"
import Hr from "@/components/partials/hr"
import IconLogo from "@/components/partials/icons/logo"
import Alert from "@/components/partials/alert"
import Form from "@/components/partials/form"

const SignUpForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [formErrors, setFormErrors] = useState<{ name?: string, email?: string, password?: string, password2?: string }>({})
  const { isLoading, error, signup } = useSignup()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormErrors({})

    const result = signUpSchema.safeParse({ name, email, password, password2 })

    if (!result.success) {
      const validationErrors = result.error.errors.reduce(
        (acc, { path, message }) => ({ ...acc, [path[0]]: message }),
        {}
      )
      setFormErrors(validationErrors)
      return
    }

    return await signup(email, password, name)
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row self-center items-end">
        <IconLogo size="45" />
        <Heading text="NEXT" size="4xl" />
        <Heading text="social" size="3xl" />
      </div>
      <div className="text-center self-center mt-4">
        Already have an account? <Link href="login">Sign in</Link>.
      </div>
      {error && <Alert message={error} />}
      <Form className="grid gap-3 flex-col flex-wrap mt-5" onSubmit={handleSubmit}>
        <InputText
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formErrors?.name && <small className="text-red-500 -mt-2">{formErrors.name}</small>}
        <InputText
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors?.email && <small className="text-red-500 -mt-2">{formErrors.email}</small>}
        <InputPassword
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors?.password && <small className="text-red-500 -mt-2">{formErrors.password}</small>}
        <InputPassword
          placeholder="Confirm password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {formErrors?.password2 && <small className="text-red-500 -mt-2">{formErrors.password2}</small>}
        <Hr></Hr>
        <CheckBox onChange={(e) => (e.target.value)} checked>
          <span className="text-base">I have read and agree to the <a target="_blank" href="terms_of_service.md">Terms of Service</a> and <a target="_blank" href="privacy_policy.md">Privacy Policy</a>.</span>
        </CheckBox>
        <Hr></Hr>
        <Button value="Sign up" disabled={isLoading} />
      </Form>
    </div>)
}

export default SignUpForm