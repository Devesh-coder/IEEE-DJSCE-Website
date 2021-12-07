import React from 'react';
import styles from "./OurEvents.module.scss";
import CarouselComp from "./Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const OurEvents = () => {


  return (
    <div className={styles.ourEvents}>
      <h1 className={styles.eventHeading}>Events</h1>
      <div>
        <button onClick={() => { }}>2017</button>
        <button>2018</button>
        <button>2019</button>
        <button>2020</button>
        <button>2021</button>
      </div>
      <div className={styles.Carousel}>
        <CarouselComp />
      </div>
    </div>
  )
}

export default OurEvents
