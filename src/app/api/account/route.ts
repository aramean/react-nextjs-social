import { account } from "@/lib/appwrite"

interface Payload {
  name: string
}

export async function PATCH(request: Request) {  
  // Parse the request body
  const { name }: Payload = await request.json()

  try {
    const session = await account.updateName(
      name
    )
    return Response.json({ session })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}