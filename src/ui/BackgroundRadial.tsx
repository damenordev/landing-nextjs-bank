import { cn } from '@/styles'
import Image from 'next/image'

export interface IBackgroundRadialProps {
  position?: 'left' | 'right'
}

const BACKGROUND_IMAGE_LEFT = '/images/background-floated-left.png'
const BACKGROUND_IMAGE_RIGHT = '/images/background-floated-right.png'

export const BackgroundRadial: React.FC<IBackgroundRadialProps> = ({ position = 'left' }) => {
  const imageSrc = position === 'left' ? BACKGROUND_IMAGE_LEFT : BACKGROUND_IMAGE_RIGHT
  return (
    <div
      className={cn('absolute -z-50 top-0', {
        'left-0': position === 'left',
        'right-0': position === 'right',
      })}
    >
      <Image src={imageSrc} width={850} height={650} alt={`Gradient ${position}`} />
    </div>
  )
}
