import Image from 'next/image'
import Link from 'next/link'

import { BackgroundRadial, Reveal, TextGradient, TransitionMotion } from '@/ui'

export const Hero = () => {
  return (
    <div className="relative w-full p-4 md:py-40">
      <BackgroundRadial position="right" />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              El nuevo
              <TextGradient className="font-secondary block leading-snug -mb-2.5">banco digital</TextGradient>
              para todos
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Nuestro equipo de expertos utiliza una metodología para identificar las tarjetas de crédito que probablemente se ajusten a sus necesidades.
              Examinamos tasas porcentuales anuales, tarifas anuales.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial text-neutral-950 font-bold ">
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <TransitionMotion className="flex items-center justify-center">
          <Image src="/images/cards-block.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
        </TransitionMotion>
      </div>
      
    </div>
  )
}
