import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your App',
  description: 'Your app description',
}

import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
