import React from 'react'
import styles from './FloatingLink.module.scss'

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous"></link>

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
