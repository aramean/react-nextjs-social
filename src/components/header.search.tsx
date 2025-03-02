"use client"

import InputText from "@/components/partials/inputText"

const HeaderSearch = () => {
  return (<><InputText
    placeholder="Search on nextSocial"
    textSize="sm"
    height="sm"
    onChange={e => e.target}
  ></InputText></>)
}

export default HeaderSearch