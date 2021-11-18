import React from 'react'
import styles from "./Profile.module.scss";

function Profile({ name, title, img }) {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <img src={img} alt=""></img>
            </div>
            <div className={styles.profile__name}>{name}</div>
            <div className={styles.profile__title}>{title}</div>
        </div>
    )
}

export default Profile
