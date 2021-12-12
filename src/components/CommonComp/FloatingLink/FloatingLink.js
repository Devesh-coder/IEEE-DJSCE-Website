import React from 'react'
import styles from './FloatingLink.module.scss'
<link rel="stylesheet" href="https://kit.fontawesome.com/a28f231496.js" />

function FloatingLink() {
    return (
        <div className={styles.icons}>
            <a href="#"><i class="fab fa-medium-m"></i></a> 
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fas fa-envelope"></i></a>
        </div>
    )
}

export default FloatingLink
