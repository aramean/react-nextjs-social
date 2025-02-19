import { databases } from '@/lib/appwrite'

export async function GET() {
    try{
        const session = databases.listDocuments('67a1f726001f51b0fb86', '67b6232e0015e5bf28bb')
        console.dir(session)
    }catch(e) {
        console.error(e)
    }
}