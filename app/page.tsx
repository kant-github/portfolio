'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PreLoader from '@/src/components/landing/preLoader/PreLoader';
import Header from '@/src/components/Header/Header';
import LandingLeftText from '@/src/components/landing/LandingLeftText';
import Image from 'next/image';
import SvgLineDescription from '@/src/components/ui/SvgLineDescription';
import ZoomParallex from '@/src/components/landing/ZoomParallex';
import CursorHoverMask from '@/src/components/ui/CursorHoverMask';
import HoverBorderGradient from '@/src/components/ui/HoverBorderGradient';
import { Spotlight } from '@/src/components/ui/spotlight-new';
import { TimelineView } from '@/src/components/ui/TimelineView';


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
      {/* <Spotlight /> */}
      <div className='flex items-center justify-between h-screen mx-16'>
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
      <CursorHoverMask />
      <TimelineView />
    </div>
  )
}
