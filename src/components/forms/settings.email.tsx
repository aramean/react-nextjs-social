"use client"

import { useState } from "react"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"

const SettingsForm = () => {
  const [name, setEmail] = useState("")

  return (<Form>
    <InputText
      placeholder="Email"
      value={name}
      onChange={(e) => setEmail(e.target.value)}
    />
  </Form>)
}

export default SettingsForm