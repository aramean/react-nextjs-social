import { getAuthToken } from '@/util/cookies';
import { redirect } from 'next/navigation';
import Logo from '../components/ui/partials/logo';
import HeaderSearch from '../components/ui/header.search';
import HeaderStatus from '../components/ui/header.status';
import Link from 'next/link';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  if (await getAuthToken() === null) {
    redirect('/login')
  }

  return (<>
    <header className="flex items-center px-5 h-12 bg-black shadow-md">
      <Link href="dashboard"><Logo color="#fff" size="30" /></Link>
      <HeaderSearch />
      <HeaderStatus />
    </header>
    <main>{children}</main>
  </>)
}