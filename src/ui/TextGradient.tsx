import { cn } from '@/styles'

export interface ITextGradientProps {
  children: React.ReactNode
  className?: string
}

export const TextGradient: React.FC<ITextGradientProps> = ({ children, className }) => {
  return <span className={cn('bg-clip-text text-transparent bg-blueLight', className)}>{children}</span>
}
