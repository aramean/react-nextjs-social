import type { Metadata } from "next"
import { APP_TITLE } from "@constants"
import "@css"

export const metadata: Metadata = {
  title: APP_TITLE
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
