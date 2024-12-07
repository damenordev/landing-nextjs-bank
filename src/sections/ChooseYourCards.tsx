'use client'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import Image from 'next/image'

import { BackgroundRadial, Reveal, TextGradient, TransitionMotion } from '@/ui'

const dataCards = [
  {
    id: 1,
    image: '/images/card-1.png',
  },
  {
    id: 2,
    image: '/images/card-2.png',
  },
  {
    id: 3,
    image: '/images/card-3.png',
  },
]

export const ChooseYourCards = () => {
  return (
    <div className="relative px-6 py-20" id="tarjetas">
      <BackgroundRadial />
      <div className="block max-w-5xl mx-auto lg:grid lg:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">
            Elige la tarjeta que más
            <TextGradient className="block font-secondary mt-1">se adapta a tus necesidades</TextGradient>
          </h2>
        </Reveal>
        <div className="relative px-5 mt-8 lg:mt-0">
          <TransitionMotion>
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id}>
                  <Image src={image} alt="Credit Card" width="400" height="300" />
                </SwiperSlide>
              ))}
            </Swiper>
          </TransitionMotion>
        </div>
      </div>
    </div>
  )
}
