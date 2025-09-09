import './globals.css'
import Header from '../components/header'
import { lusitana } from '../app/ui/fonts'

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
