import React from "react";
import styles from "./OurVision.module.scss";
import img from "./Vision.png"
import Vision from "./Vision/Vision";



export default function OurVision() {

    const data = [
        {
            title: "Capitalize",
            caption: "We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.",
            img: img,
        },
        {
            title: "Capitalize",
            caption: "We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.",
            img: img,
        },
        {
            title: "Capitalize",
            caption: "We attempt to capitalize on the abundant talent and ideas and give others a platform to showcase their perceptions.",
            img: img,
        },
    ]

    return (
        <div className={styles.baseVision}>
            <h1 className={styles.OurVision}>Our Vision</h1>
            <div className={styles.Visions}>
                {
                    data.map((item, key) => (
                        <Vision
                            img={item.img} key={key}
                            title={item.title}
                            caption={item.caption}
                        />
                    ))
                }
            </div>
        </div>
    )
}
