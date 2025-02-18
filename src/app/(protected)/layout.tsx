import { getAuthToken } from '@/util/cookies';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  if (await getAuthToken() === null) {
    redirect('/login')
  }

  return <>{children}</>
}