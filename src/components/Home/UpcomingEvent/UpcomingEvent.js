import React from 'react'
import img from './UpcomingEvent.png'
import styles from './UpcomingEvent.module.scss'

export default function UpcomingEvent() {
    return (
        <div>
            <h1 className={styles.title}>Upcoming Event</h1>
            <div className={styles.imgWrap}>
                <img src={img} alt="Upcoming Event" className={styles.image}/>
            </div>
        </div>
    )
}
