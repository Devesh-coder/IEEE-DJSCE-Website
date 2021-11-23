import React from 'react';
import styles from "./PrevSessionRec.module.scss";

const PrevSessionRec = () => {
  return (
    <div className={styles.prevSessionRec}>
      {/* <video src="https://youtu.be/wBpoGtTkbDY"></video> */}
      {/* <iframe
        src="https://youtu.be/wBpoGtTkbDY">
      </iframe> */}
      <iframe src="https://www.youtube.com/embed/wBpoGtTkbDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
    </div>
  )
}

export default PrevSessionRec
