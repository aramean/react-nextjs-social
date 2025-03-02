"use client"

import InputText from "@/components/partials/inputText"
import { APP_TITLE } from "@constants"

const HeaderSearch = () => {
  return (<><InputText
    placeholder={`Search on ${APP_TITLE}`}
    textSize="sm"
    height="sm"
    onChange={e => e.target}
  ></InputText></>)
}

export default HeaderSearch