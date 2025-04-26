'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PreLoader from '@/src/components/landing/preLoader/PreLoader';
import LandingLeftText from '@/src/components/landing/LandingLeftText';


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
    <main className=''>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <LandingLeftText />
    </main>
  )
}
