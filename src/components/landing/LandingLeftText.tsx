import Text3d from '../3d/Text3d';
import styles from '../../styles/LandingLeftText.module.scss'
import { useRef, MouseEvent } from 'react';
import SvgLineDescription from '../ui/SvgLineDescription';

export default function LandingLeftText() {
  const plane = useRef<HTMLDivElement>(null);
  const maxRotate = 45;

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;

    if (plane.current) {
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    }
  };

  return (
    <div onMouseMove={manageMouseMove} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Text3d primary="Muskan" secondary="Singer" />
        <Text3d primary="Aggarwal" secondary="Freelancer" />

      </div>

        <div className='text-red-500 mt-8 ml-7 font-semibold text-md'>Tuning Brands & Ragas—One Note, One Click at a Time</div>
        {/* <SvgLineDescription /> */}

    </div>
  );
}
