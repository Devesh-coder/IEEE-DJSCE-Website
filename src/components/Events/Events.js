import React from 'react'
import cx from "classnames";
import Nav from '../CommonComp/Nav/Nav'
import styles from './Events.module.scss'
import PrevSessionRec from './PrevSessionRec/PrevSessionRec';

const Events = () => {
  return (
    <div className={styles.events}>
      <Nav />
      <div className={cx(styles.eventsBody)}>
        <div className={styles.eventsTitle}>Events</div>
        <PrevSessionRec />
      </div>

    </div>
  )
}

export default Events
