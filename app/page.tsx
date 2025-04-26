'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PreLoader from '@/src/components/landing/preLoader/PreLoader';
import Header from '@/src/components/Header/Header';
import LandingLeftText from '@/src/components/landing/LandingLeftText';
import Image from 'next/image';
import SvgLineDescription from '@/src/components/ui/SvgLineDescription';
import ZoomParallex from '@/src/components/landing/ZoomParallex';


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <div className='bg-neutral-950 mx-12'>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Header />
      <div className='flex items-center justify-between h-screen'>

        <div className='w-[50%]'>
          <LandingLeftText />
          <div >
            <SvgLineDescription />
          </div>
        </div>

        <div className='p-12'>
          <Image
            src={"/images/muskan-1.jpg"}
            width={550}
            height={400}
            alt='user'
            className='rounded-2xl'
          />
        </div>

      </div>
      <ZoomParallex />
    </div>
  )
}
