import type { Metadata } from "next"
import { APP_TITLE } from "@constants"
import "@css"

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: APP_TITLE
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        {children}
      </body>
    </html>
  )
}
