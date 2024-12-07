'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules'

import { BackgroundRadial, Reveal } from '@/ui'

const dataTestimonials = [
  {
    id: 1,
    name: 'Juan Recio',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile1.png',
  },
  {
    id: 2,
    name: 'Laura García',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile2.png',
  },
  {
    id: 3,
    name: 'Lucas Martínez',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile3.png',
  },
  {
    id: 4,
    name: 'Vicente Calvo',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile4.png',
  },
  {
    id: 5,
    name: 'Patricia García',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile1.png',
  },
  {
    id: 6,
    name: 'Raúl Vidal',
    work: 'Founder',
    testimonial: 'Muy buena landing page SPA sobre como hacer un banco',
    image: '/images/profile3.png',
  },
]

export function Testimonials() {
  return (
    <div className="relative p-8" id="testimonios">
      <BackgroundRadial />
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl mb-5 font-semibold">Qué dicen los clientes de nosotros</h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-primaryDark">Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.</p>
          </div>
        </Reveal>
      </div>

      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          678: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-[250px] w-full md:max-w-5xl"
      >
        {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
          <SwiperSlide key={id} className="my-5 cursor-pointer md:px-10">
            <Reveal>
              <Image src="/images/testimonial-icon.png" alt="Testimonial" width={50} height={50} className="w-auto h-auto" />
              <div className="my-5">{testimonial}</div>
              <div className="flex">
                <Image src={image} alt={name} width="50" height={50} className="mr-5" />
                <div>
                  <h4 className="text-center">{name}</h4>
                  <p className="text-primaryDark">{work}</p>
                </div>
              </div>
            </Reveal>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
