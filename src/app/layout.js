import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Blog'>Blog</Link>
          <Link href='/docs'>docs</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
