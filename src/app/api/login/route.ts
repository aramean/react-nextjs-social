"use server"

import { account } from "@/lib/appwrite"

interface Payload {
  email: string
  password: string
}

export async function POST(request: Request) {
  // Parse the request body
  const { email, password }: Payload = await request.json()

  try {
    const session = await account.createEmailPasswordSession(email, password)
    return Response.json({ session })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}