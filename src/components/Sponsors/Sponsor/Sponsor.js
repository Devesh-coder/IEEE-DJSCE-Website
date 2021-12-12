import React from "react";
import styles from './Sponsor.module.scss';


export default function Sponsor({ img, website, name }) {
    return (
        <div className={styles.sponsorBase}>
            <img className={styles.sponsorImg} src={img} alt="" />
            <h2 className={styles.sponsorName}>
                <a href={website} className={styles.sponsorLink} target={"_blank"} rel={"noopener noreferrer"}>{name}</a>
            </h2>
        </div>
    )
}
