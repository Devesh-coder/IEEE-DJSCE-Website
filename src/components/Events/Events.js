import React from 'react'
import cx from "classnames";
import Nav from '../CommonComp/Nav/Nav'
import ScrollTop from '../CommonComp/ScrollTop/ScrollTop'
import styles from './Events.module.scss'
import PrevSessionRec from './PrevSessionRec/PrevSessionRec';
import Footer from '../CommonComp/Footer/Footer';

const Events = () => {
  return (
    <div className={styles.events}>
      <Nav />
      <div className={cx(styles.eventsBody)}>
        <div className={styles.eventsTitle}>Events</div>
        <PrevSessionRec />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Events
