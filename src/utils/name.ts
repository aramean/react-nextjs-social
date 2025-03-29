"use client"

export const parseFullName = (fullName: string) => {
  const nameParts = fullName.trim().split(" ")

  return {
    firstName: nameParts[0] || "",
    middleName: nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "",
    lastName: nameParts.length > 1 ? nameParts[nameParts.length - 1] : ""
  }
}