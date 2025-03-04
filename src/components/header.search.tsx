"use client"

import { useState } from "react"
import { APP_TITLE } from "@constants"
import InputText from "@/components/partials/inputText"

const HeaderSearch = () => {
  const [search, setSearch] = useState("")

  return (<InputText
    placeholder={`Search on ${APP_TITLE}`}
    textSize="sm"
    height="md"
    icon={true}
    indent="xl"
    value={search}
    onChange={e => setSearch(e.target.value)}
  ></InputText>)
}

export default HeaderSearch