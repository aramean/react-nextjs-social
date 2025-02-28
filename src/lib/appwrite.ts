import { Client, Account, Databases, ID } from "appwrite"

const client = new Client()
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

const account = new Account(client)
const databases = new Databases(client)

export { client, account, databases, ID }