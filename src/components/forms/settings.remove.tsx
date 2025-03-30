"use client"

import { useState } from "react"
import { useAccount } from "@/hooks/useAccount"
import { accountRemoveSchema } from "@/schemas/settings"
import InputPassword from "@/components/partials/inputPassword"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"

const SettingsRemove = () => {
  const { isLoading, error, checkPassword } = useAccount()

  const [password, setPassword] = useState("")
  const [formErrors, setFormErrors] = useState<{ name?: string, email?: string, password?: string, password2?: string }>({})

  const handleRemoveAccount = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormErrors({})

    const result = accountRemoveSchema.safeParse({ password })

    if (!result.success) {
      const validationErrors = result.error.errors.reduce(
        (acc, { path, message }) => ({ ...acc, [path[0]]: message }),
        {}
      )
      setFormErrors(validationErrors)
      return
    }

    return await checkPassword(password)
  }

  return (
    <Form onSubmit={handleRemoveAccount} className="flex flex-col w-full gap-4">
      {formErrors?.password && <small className="text-red-500 -mt-2">{formErrors.password}</small>}
      <InputPassword
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Alert message={error} />}
      <Button disabled={isLoading} value="Remove Account" />
    </Form>
  )
}

export default SettingsRemove