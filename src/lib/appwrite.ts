"use client"

import { Client, Account, Databases, ID, Query, AppwriteException } from "appwrite"
import { ENDPOINT, PROJECT } from "@constants"

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT)
const account = new Account(client)
const databases = new Databases(client)

const exception = (error: unknown): string => {
  if (error instanceof AppwriteException) {
    return error.message
  }
  return "An unexpected error occurred"
}

export { client, account, databases, ID, Query, exception }