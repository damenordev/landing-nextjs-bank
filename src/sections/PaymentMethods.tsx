'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'

import { BackgroundRadial, Reveal } from '@/ui'

const dataPaymentMethods = [
  {
    id: 1,
    image: 'payment-1.png',
  },
  {
    id: 2,
    image: 'payment-2.png',
  },
  {
    id: 3,
    image: 'payment-3.png',
  },
  {
    id: 4,
    image: 'payment-4.png',
  },
  {
    id: 5,
    image: 'payment-5.png',
  },
  {
    id: 6,
    image: 'payment-6.png',
  },
  {
    id: 7,
    image: 'payment-7.png',
  },
  {
    id: 8,
    image: 'payment-8.png',
  },
]

export const PaymentMethods = () => {
  return (
    <div className="relative py-20" id="servicios">
      <BackgroundRadial />
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        >
          <div className="absolute flex">
            {dataPaymentMethods.map(({ id, image }) => (
              <SwiperSlide key={id} className="flex items-center slider-horizontal">
                <Image src={`/images/${image}`} alt="Payment" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="px-6 my-20">
        <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-neutral-900/50 backdrop-blur-md md:px-16 md:py-12 shadow-dark rounded-3xl">
          <div className="grid items-center md:grid-cols-2">
            <div className="my-8">
              <Reveal>
                <h3 className="text-3xl font-bold">Ven a probar nuestros servicios</h3>
              </Reveal>
              <Reveal>
                <p>Todo lo que necesitas para aceptar pagos con tarjeta y haga crecer su negocio en cualquier parte del planeta</p>
              </Reveal>
            </div>

            <Link href="#" className="px-4 py-3 mx-auto rounded-md bg-blueRadial font-bold text-neutral-950">
              <Reveal>Empieza ahora</Reveal>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
