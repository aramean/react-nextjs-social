"use client"

import ApiFetch from "@/lib/apiFetch"

export default function Settings() {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const response = await ApiFetch("PATCH", "account", { "name": name })
    console.dir(response)
    return
  }

  return (<div className="flex">
    <div className="w-2/5">Profile Information</div>
    <div className="w-3/5"><button onClick={handleSubmit}>Save</button></div>
  </div>)
}