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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className="bg-slate-50">
        {children}
      </body>
    </html>
  )
}
