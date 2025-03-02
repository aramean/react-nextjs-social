import { useState } from "react"
import InputText from "@/components/partials/inputText"

const SettingsForm = () => {
  const [name, setEmail] = useState("")

  return (<form>
    <InputText
      placeholder="Email"
      value={name}
      onChange={(e) => setEmail(e.target.value)}
    />
  </form>)
}

export default SettingsForm