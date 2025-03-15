"use client"

export const getAuthToken = () => {
  const item = (typeof window !== "undefined") ? localStorage.getItem("cookieFallback") || "" : ""
  try {
    const firstKey = Object.keys(JSON.parse(item))[0]
    return firstKey.split("_")[2]
  } catch {
    return ""
  }
}