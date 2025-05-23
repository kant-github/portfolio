import React, { useRef } from 'react'
import styles from '../../styles/LandingLeftText.module.scss'

interface Text3dProps {
    primary: string;
    secondary: string
}
export default function Text3d({ primary, secondary }: Text3dProps) {

    const text1 = useRef(null);
    const text2 = useRef(null);

    return (
        <div className={styles.textContainer}>
            <p className={styles.primary} ref={text1}>{primary}</p>
            <p className={styles.secondary} ref={text2}>{secondary}</p>
        </div>
    )
}