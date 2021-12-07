import React from 'react';
import styles from "./CarouselContent.module.scss";


const CarouselContent = ({ title, content, img }) => {
  return (
    <div className={styles.carouselContent}>
      <div className={styles.contentgrid}>
        <div className={styles.contentData}>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className={styles.contentImg}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CarouselContent
