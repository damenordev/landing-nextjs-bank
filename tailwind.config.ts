import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors({ colors }) {
        return {
          primary: '#6de4e8',
          'primary-foreground': colors.neutral[950],
          // primaryDark: 'rgba(255,255,255, 0.7);',
          // secondary: "#6DE4E8",
        }
      },
      backgroundImage: {
        radialBlack: 'linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)',
        blueRadial: 'linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)',
        blueLight: 'linear-gradient(90deg, #6de4e8 0%, rgba(255, 255, 255, 0.86) 95.83% )',
      },
      boxShadow: {
        dark: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans'],
        secondary: ['var(--font-secondary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
