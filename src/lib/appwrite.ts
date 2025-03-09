"use client"

import { Client, Storage, Account, Databases, ID, Query, AppwriteException } from "appwrite"
import { ENDPOINT, PROJECT } from "@constants"

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT)
const storage = new Storage(client)
const account = new Account(client)
const databases = new Databases(client)

const exception = (error: unknown): string => {
  return error instanceof AppwriteException ? error.message : "An unexpected error occurred"
}

export { client, storage, account, databases, ID, Query, exception }