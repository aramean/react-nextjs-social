"use client"

export const getAuthToken = () => {
  const item = (typeof window !== "undefined") ? localStorage.getItem("cookieFallback") || "" : ""
  const jwt = item && Object.values(JSON.parse(item))[0] as string

  try {
    const decode = JSON.parse(atob(jwt))
    return decode.id
  } catch {
    return ""
  }
}