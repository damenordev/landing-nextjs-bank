import type { Metadata } from 'next'

import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Landing Bank',
  description: 'A modern design tool landing page built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('w-full bg-neutral-950 text-white selection:bg-primary selection:text-primary-foreground overflow-x-hidden', getFontsVariables())}>
        {children}
      </body>
    </html>
  )
}
