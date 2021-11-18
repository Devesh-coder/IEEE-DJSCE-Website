import React from 'react'
import styles from "./Profile.module.scss";
import sample from './sample.png'

function Profile({name,title}) {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <img src={sample} alt=""></img>
            </div>
            <div className={styles.profile__name}>{name}</div>
            <div className={styles.profile__title}>{title}</div>
        </div>
    )
}

export default Profile
