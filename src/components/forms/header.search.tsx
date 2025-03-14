"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { APP_TITLE } from "@constants"
import InputText from "@/components/partials/inputText"
import Form from "@/components/partials/form"

const HeaderSearch = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!search.trim()) return
    router.push(`/search?q=${encodeURIComponent(search)}`)
    setSearch("")
  }

  return (<Form onSubmit={e => handleSearch(e)}>
    <InputText
      placeholder={`Search on ${APP_TITLE}`}
      textSize="sm"
      height="md"
      icon={true}
      indent="xl"
      responsive="sm:w-2/3 md:w-2/4 lg:w-full"
      width="9"
      value={search}
      onChange={e => setSearch(e.target.value)}
    ></InputText>
  </Form>)
}

export default HeaderSearch