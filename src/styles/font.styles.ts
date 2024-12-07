import { Borel, Outfit } from 'next/font/google'

const fontPrimary = Outfit({ subsets: ['latin'], variable: '--font-primary' })
const fontSecondary = Borel({ subsets: ['latin'], variable: '--font-secondary', weight: ['400'] })

export const getFontsVariables = () => {
  return `${fontPrimary.variable} ${fontSecondary.variable}`
}
