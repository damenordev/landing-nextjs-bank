import Image from 'next/image'

import { TransitionMotion, Reveal } from '@/ui'

export const ControlBilling = () => {
  return (
    <div className="p-4 py-20">
      <div className="flex flex-col-reverse max-w-screen-xl mx-auto md:flex-row place-content-evenly">
        <TransitionMotion className="flex-1 p-6 md:p-8">
          <Image src="/images/control-business.png" alt="Control Business" width="780" height={411} className="w-full h-auto" />
        </TransitionMotion>
        <div className="flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className="text-5xl font-semibold">
              Controla fácilmente <br />
              tu facturación
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Con la tarjeta de crédito adecuada, puede mejorar su vida financiera generando crédito, obteniendo recompensas y ahorrando dinero. Pero con
              cientos de tarjetas de crédito en el mercado.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
