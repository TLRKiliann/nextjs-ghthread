import { ThemeProvider } from '@/src/theme/ThemeProvider'
//import clsx from 'clsx';
import type { Metadata } from 'next'

//import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/src/theme/features/layout/Header'
import Footer from '@/src/theme/features/Footer'

//const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className='w-full dark'>
      <body className='bg-background w-full' >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex flex-col h-full'>
            <Header />
            <div className='flex-1 max-w-lg m-auto py-12 w-full'>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
