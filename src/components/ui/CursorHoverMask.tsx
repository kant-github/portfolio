'use client'
import styles from '../../styles/CursorHoverMask.module.scss'
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/src/hooks/useMousePosition';

export default function CursorHoverMask() {

    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.mask}
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
                <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
                    Currently, I’m sharpening my skills as a Performance Marketer at Cog Culture, while nurturing my first love — music. 🎶💖 I’m a YouTuber with 10,000+ wonderful subscribers, and I’m learning Hindustani Classical to deepen my musical journey.
                    My passions include SEO, SEM, content writing, and social media marketing


                </p>
            </motion.div>

            <div className={styles.body}>
                <p>Hi, <span>I’m Muskan! </span>
                    I’m a passionate content creator and digital marketer, with a heart full of creativity and endless ideas. I recently graduated with a Bachelor&apos;s degree in Journalism and Mass Communication from Doon Business School, Dehradun — where I discovered the magic of storytelling and digital media.
                </p>
            </div>

        </main>
    )
}