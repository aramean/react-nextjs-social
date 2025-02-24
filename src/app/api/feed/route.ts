import { databases, ID } from '@/lib/appwrite'

const database = '67a1f726001f51b0fb86';

export async function GET() {
    try {
        const session = await databases.listDocuments(database, '67b6232e0015e5bf28bb')
        console.dir(session)
    } catch (e) {
        console.error(e)
    }
}

export async function POST(request: Request) {
    try {
        const session = await databases.createDocument(database, '67b5d98900395c75f665',
            ID.unique(),
            { "message": "Yeahhhhh!" }
        )
        return Response.json({ session })
    } catch (error) {
        return Response.json(error, { status: 500 });
    }
}