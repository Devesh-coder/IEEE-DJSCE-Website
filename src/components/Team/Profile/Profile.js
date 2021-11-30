import React from 'react'
import styles from "./Profile.module.scss";

function Profile({ name, title, img, jrs }) {

    const ToolTipComp = () => {

        const comp = (
            jrs.length > 0 ? (
                <div className={styles.profile__tooltip}>
                    {
                        jrs.map((jr) => {
                            return <div>{jr}</div>
                        })
                    }
                </div>
            ) : null)

        return comp;
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile__background}>
                <img src={img} alt=""></img>
            </div>
            <ToolTipComp />
            <h3 className={styles.profile__name}>{name}</h3>
            <h5 className={styles.profile__title}>{title}</h5>
        </div>
    )
}

export default Profile
