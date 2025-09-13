import './globals.css'
import Header from '../shared/components/header'
import { lusitana } from '@/shared/ui/fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
