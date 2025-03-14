"use client"

export const getAuthToken = (): string | null => {
  const item = localStorage.getItem("cookieFallback") || ""
  try {
    const firstKey = Object.keys(JSON.parse(item))[0]
    return firstKey.split("_")[2]
  } catch {
    return null
  }
}