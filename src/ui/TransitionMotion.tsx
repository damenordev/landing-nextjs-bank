'use client'
import { useInView, useAnimation, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

export interface ITransitionMotion {
  children: React.ReactNode
  className?: string
}

const fadeIn = () => ({
  hidden: {
    y: 80,
    opacity: 0,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.4,
      delay: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
})

export const TransitionMotion = ({ children, className }: ITransitionMotion) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const mainControls = useAnimation()

  useEffect(() => {
    if (!isInView) return
    mainControls.start('visible')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref}>
      <motion.div variants={fadeIn()} initial="hidden" animate={mainControls} exit="hidden" className={className}>
        {children}
      </motion.div>
    </div>
  )
}
