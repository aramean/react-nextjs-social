'use server'

import { cookies } from 'next/headers'

export const getAuthToken = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('token')?.value
}

export const setAuthToken = async () => {
    const cookieStore = await cookies()
    cookieStore.set('token', 'logged')
}

export const deleteAuthToken = async () => {
    const cookieStore = await cookies()
    cookieStore.delete('token')
}