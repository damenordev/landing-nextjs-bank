'use client'
import CountUp from 'react-countup'

import { TransitionMotion } from './TransitionMotion'
import { TextGradient } from './TextGradient'

const dataCounter = [
  {
    id: 1,
    startNumber: 500,
    endNumber: 3800,
    text: 'usuarios activos',
  },
  {
    id: 2,
    startNumber: 0,
    endNumber: 230,
    text: 'empleados',
  },
  {
    id: 3,
    startNumber: 600,
    endNumber: 1800,
    text: 'millones invertidos',
  },
]

export const AnimatedCounter = () => {
  return (
    <TransitionMotion className="max-w-5xl py-10 mx-auto">
      <div className="justify-between md:flex">
        {dataCounter.map(({ id, startNumber, endNumber, text }) => (
          <div key={id} className="py-5 text-2xl text-center md:text-left">
            +
            <CountUp start={startNumber} end={endNumber} duration={1.5} enableScrollSpy />
            <TextGradient className="ml-1">{text}</TextGradient>
          </div>
        ))}
      </div>
    </TransitionMotion>
  )
}
