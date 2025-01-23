import Image from 'next/image'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <section className='hidden w-1/2 items-center justify-center bg-brand p-[40px] lg:flex xl:w-2/5'>
        <div className='flex flex-col justify-center space-y-[48px]'>
          <Image
            src='/Logo.svg'
            alt='logo'
            width={224}
            height={82}
            className='h-auto'
          />

          <div className='space-y-[20px] text-white'>
            <h1 className='h1'>Manage your files the best way</h1>
            <p className='body-1'>
              Awesome, we&apos;ve created the perfect place for you to store all
              your documents.
            </p>
          </div>

          <Image
            src='/illustration.svg'
            alt='illustration'
            width={342}
            height={342}
            className='self-center transition-all hover:rotate-2 hover:scale-105'
          />
        </div>
      </section>

      <section className='flex flex-1 flex-col items-center bg-white p-[16px] py-[40px] lg:justify-center lg:p-[40px] lg:py-0'>
        <div className='mb-[52px] lg:hidden'>
          <Image
            src='/assets/icons/logo-full-brand.svg'
            alt='logo'
            width={224}
            height={82}
            className='h-auto w-[200px] lg:w-[250px]'
          />
        </div>

        {children}
      </section>
    </div>
  )
}

export default Layout
