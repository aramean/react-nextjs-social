"use client"

import { Client, Account, Databases, ID, Query } from "appwrite"
import { ENDPOINT, PROJECT } from "@constants"

const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT)

const account = new Account(client)
const databases = new Databases(client)

export { client, account, databases, ID, Query }