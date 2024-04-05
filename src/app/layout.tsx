import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header, SectionContainer, Footer } from '@/components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vinal2.me',
  description: "vinal2's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className='bg-background text-black dark:text-white'>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          

              <main>{children}</main>


        </ThemeProvider>
      </body>
    </html>
  </>
  )
}            /*<SectionContainer> <div className="flex h-full flex-col justify-between font-sans">
              <Header /> 
              <Footer />
            </div>          </SectionContainer> */