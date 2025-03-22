import { storage, Query } from "@/lib/appwrite"
import { BUCKET_AVATAR } from "@constants"

export async function fetchAvatars(userIds: string[]): Promise<Record<string, string>> {
  try {
    // Fetch all user avatars in one request using user IDs
    const files = await storage.listFiles(BUCKET_AVATAR, [
      Query.contains("$id", userIds)
    ])

    // Create a map of user IDs to file URLs
    const avatarMap: Record<string, string> = {}

    files.files.forEach((file) => {
      avatarMap[file.$id] = storage.getFileView(BUCKET_AVATAR, file.$id)
    })

    return avatarMap
  } catch (error) {
    console.error("Error fetching avatars:", error)
    return {}
  }
}