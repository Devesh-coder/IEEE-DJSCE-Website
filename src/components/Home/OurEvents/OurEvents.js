import React, { useContext, useState } from 'react';
import styles from "./OurEvents.module.scss";
import CarouselComp from "./Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Context } from '../../ContextData';


const OurEvents = () => {

  const [baseData] = useContext(Context);

  const [currentYear, setCurrentYear] = useState(2021);

  const carouselContent = baseData.contentForCarousel;
  const eventYears = Object.keys(carouselContent);

  return (
    <div className={styles.ourEvents}>
      <h1 className={styles.eventHeading}>Events</h1>
      <div>
        {
          eventYears.map((item, key) => (
            <button key={key} onClick={() => setCurrentYear(item)}
              className={(item) === currentYear.toString() ? styles.activeBtn : ""}
            >{item}</button>
          ))
        }
      </div>
      <div className={styles.Carousel}>
        <CarouselComp carouselData={carouselContent[currentYear]} />
      </div>
    </div>
  )
}

export default OurEvents
