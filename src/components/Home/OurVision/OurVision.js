import React from "react";
import styles from "./OurVision.module.scss";
import img from "./Vision.png"
import Vision from "./Vision/Vision";



export default function OurVision() {
    const data = [img, "Capitalize", "We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions."];
    return (
        <div>
            <h1 className={styles.OurVision}>Our Vision</h1>
            <div className={styles.Visions}>
            <Vision img={data[0]} title={data[1]} caption={data[2]}/>
            <Vision img={data[0]} title={data[1]} caption={data[2]}/>
            <Vision img={data[0]} title={data[1]} caption={data[2]}/>
            </div>
        </div>
    )
}
