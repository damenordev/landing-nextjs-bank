'use client'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line } from 'react-icons/ri'
import { useState } from 'react'

import { TransitionMotion } from '@/ui'

const dataHeader = [
  {
    id: 1,
    name: 'Características',
    idLink: '#features',
  },
  {
    id: 2,
    name: 'Tarjetas',
    idLink: '#tarjetas',
  },
  {
    id: 3,
    name: 'Testimonios',
    idLink: '#testimonios',
  },
  {
    id: 4,
    name: 'Servicios',
    idLink: '#servicios',
  },
]

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <TransitionMotion>
      <nav className="flex flex-wrap items-center justify-between max-w-5xl p-4 mx-auto md:py-8">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" width="150" height="40" alt="Logo Bank" />
        </Link>
        <RiMenu3Line className="block text-3xl md:hidden cursor-pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)} />
        <div className={`${openMobileMenu ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <div key={id} className="px-4 transition-all duration-500 ease-in-out">
                <Link href={idLink} className="text-lg hover:text-primary">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </TransitionMotion>
  )
}
