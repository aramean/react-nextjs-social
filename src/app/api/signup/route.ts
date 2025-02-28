import { account, ID } from "@/lib/appwrite"

interface Payload {
  email: string
  password: string
  name: string
}

export async function POST(request: Request) {
  // Parse the request body
  const { email, password, name }: Payload = await request.json()

  try {
    const session = await account.create(ID.unique(), email, password, name)
    return Response.json({ session })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}