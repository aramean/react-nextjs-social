"use client"

import { useAccount } from "@/hooks/useAccount"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"
import Alert from "@/components/partials/alert"
import Button from "@/components/partials/button"
import { useProfile } from "@/hooks/useProfileLoad"
import { getAuthToken } from "@/utils/auth"

const SettingsFormName = () => {
  const {
    firstName,
    middleName,
    lastName,
    setFirstName,
    setMiddleName,
    setLastName,
    loadingProfile
  } = useProfile(getAuthToken())

  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName(firstName + " " + middleName + " " + lastName)
  }

  if (loadingProfile) return <div>Loading...</div>  // Show loading indicator while fetching

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      <InputText
        placeholder="First Name"
        value={firstName}  // Use state variable here
        onChange={(e) => setFirstName(e.target.value)}  // Update state on change
      />
      <InputText
        placeholder="Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
      <InputText
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {error && <Alert message={error} />}
      <Button disabled={isLoading} value="Save" />
    </Form>
  )
}

export default SettingsFormName