'use client'
import styles from '../../styles/SvgLineDescription.module.scss'
import { useRef, useEffect, useState } from 'react';

export default function SvgLineDescription(): JSX.Element {
  const path = useRef<SVGPathElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;
  // Track if mouse is inside the box
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setPath(progress);

    // Add a document-level mouse move listener to detect when mouse is outside the box
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (!boxRef.current || !isHovering) return;

      // Get the bounds of the box
      const rect = boxRef.current.getBoundingClientRect();

      // Check if mouse is outside the box with a small buffer (5px)
      const buffer = 5;
      if (
        e.clientX < rect.left - buffer ||
        e.clientX > rect.right + buffer ||
        e.clientY < rect.top - buffer ||
        e.clientY > rect.bottom + buffer
      ) {
        // Trigger exit animation when mouse moves just slightly outside
        setIsHovering(false);
        animateOut();
      }
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    };
  }, [isHovering]);

  const setPath = (progress: number): void => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
    }
  }

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    console.log("mouse enetered");
    setIsHovering(true);
    if (reqId) {
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    if (!isHovering) return;

    const { movementY, clientX } = e;
    if (path.current) {
      const pathBound = path.current.getBoundingClientRect();
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY
      setPath(progress);
    }
  }

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsHovering(false);
    animateOut();
  }

  const animateOut = (): void => {
    // Increase the decay rate to make the animation exit faster
    const decayRate = 0.05; // Increased from 0.025

    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, decayRate);
    time += 0.2;
    setPath(newProgress);

    // Lower threshold for stopping the animation
    if (Math.abs(progress) > 0.5) { // Decreased from 0.75
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
            ref={boxRef}
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