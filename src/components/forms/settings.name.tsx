import { useState } from "react"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"

const SettingsForm = () => {
  const [name, setName] = useState("")

  return (<Form>
    <InputText
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </Form>)
}

export default SettingsForm