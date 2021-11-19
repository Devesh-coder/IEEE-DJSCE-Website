import React from 'react'
import styles from './Vision.module.scss'

export default function Vision({img, title, caption}) {
    return (
        <div className={styles.vision}>
            <img src={img} alt="img error" className={styles.vision__img} />
            <h2 className={styles.vision__title}>{title}</h2>
            <p  className={styles.vision__caption}>{caption} </p>
        </div>
    ) 
}



