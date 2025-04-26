'use client'
import styles from '../../styles/SvgLineDescription.module.scss'
import { useRef, useEffect } from 'react';

export default function SvgLineDescription(): JSX.Element {
  const path = useRef<SVGPathElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress: number): void => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
    }
  }

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a

  const manageMouseEnter = (): void => {
    if (reqId) {
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { movementY, clientX } = e;
    if (path.current) {
      const pathBound = path.current.getBoundingClientRect();
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY
      setPath(progress);
    }
  }

  const manageMouseLeave = (): void => {
    animateOut();
  }

  const animateOut = (): void => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    }
    else {
      resetAnimation();
    }
  }

  const resetAnimation = (): void => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.line}>
          <div
            onMouseEnter={manageMouseEnter}
            onMouseMove={manageMouseMove}
            onMouseLeave={manageMouseLeave}
            className={styles.box}
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className={"flex items-center gap-x-12"}>
          <p>Smart Development</p>
          <p>Combining unique design and rich technology, we build digital products exactly as they were designed.</p>
        </div>

        <div className={"flex items-center justify-between mt-4 w-full"}>
          <p>Areas</p>
          <div className={"flex items-center gap-x-2"}>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>E-commerce</p>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>Finance</p>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>Education</p>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>Social</p>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>Entertainment</p>
            <p className='border-[1px] border-neutral-700 rounded-xl px-3 py-1 text-xs'>Medicine</p>
          </div>
        </div>
      </div>
    </div>
  )
}