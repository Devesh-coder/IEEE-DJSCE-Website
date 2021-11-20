import React from 'react'
import styles from './Blogs.module.scss';

function BlogDescription({image, title, description}) {
    return (
        <div className = {styles.blog}>
            <img src = {image} alt="img1" />
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    )
}

export default BlogDescription
