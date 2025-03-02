import { useState } from "react"
import InputText from "@/components/partials/inputText"

const SettingsForm = () => {
  const [name, setName] = useState("")

  return (<form>
    <InputText
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </form>)
}

export default SettingsForm