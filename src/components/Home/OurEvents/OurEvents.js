import React from 'react';
import styles from "./OurEvents.module.scss";

const OurEvents = () => {
  return (
    <div className={styles.ourEvents}>
      <p>Events</p>
      <div>
        <button>2017</button>
        <button>2018</button>
        <button>2019</button>
        <button>2020</button>
        <button>2021</button>
      </div>
    </div>
  )
}

export default OurEvents
