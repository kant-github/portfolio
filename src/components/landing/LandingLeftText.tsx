import Text3d from '../3d/Text3d';
import styles from '../../styles/LandingLeftText.module.scss'
import { useRef } from 'react';
import SvgLineDescription from '../ui/SvgLineDescription';

export default function LandingLeftText() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <div onMouseMove={(e) => { manageMouseMove(e) }} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Text3d primary={"Muskan"} secondary={"Singer"} />
        <Text3d primary={"Aggarwal"} secondary={"Freelancer"} />
        <div className='text-[#eb4646] mt-8 font-semibold text-md'>Tuning Brands & Ragas—One Note, One Click at a Time</div>
      </div>
    </div>
  )
}