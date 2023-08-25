import Nav from '@/components/navigation/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/fotter/Foouter'

const inter = Inter({subsets :['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className='bg-slate-900 fixed w-full z-100'>
        <Nav/>
      </header>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
