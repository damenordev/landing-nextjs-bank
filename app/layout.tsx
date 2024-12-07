import type { Metadata } from 'next'

import { cn, getFontsVariables } from '@/styles'

import '@/styles/globals.css'
import { ILayout } from '@/types'

export const metadata: Metadata = {
  title: 'Landing Bank',
  description: 'A modern design tool landing page built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }: ILayout) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('flex flex-col', getFontsVariables())}>{children}</body>
    </html>
  )
}
