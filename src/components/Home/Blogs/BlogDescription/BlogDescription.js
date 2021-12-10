import React from 'react'
import styles from './BlogDescription.module.scss';

function BlogDescription({image, title, description}) {
    return (
        <div className = {styles.blog}>
            <img src = {image} alt="img1" />
            <div className={styles.blogContent}>
                <h2 className={styles.contentTitle}> {title} </h2>
                <p className={styles.content}> {description} </p>
            </div>
        </div>
    )
}

export default BlogDescription
