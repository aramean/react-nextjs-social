"use client"

import { useAccount } from "@/hooks/useAccount"

export default function Settings() {
  const { isLoading, error, updateName } = useAccount()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    return await updateName("test")
  }

  return (<div className="flex">
    <div className="w-2/5">Profile Information</div>
    <div className="w-3/5"><button onClick={handleSubmit}>Save</button></div>
  </div>)
}