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
    <div className='bg-neutral-950'>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Header />
      <div className='flex items-center justify-between h-screen'>

        <div className='w-[50%]'>
          <LandingLeftText />
          <SvgLineDescription />
        </div>

        <div className='p-12 mr-20 flex-1'>
          <Image
            src={"/images/muskan-1.jpg"}
            width={1200}
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
