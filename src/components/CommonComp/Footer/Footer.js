import React from 'react';
import styles from "./Footer.module.scss";
import img from "../../../images/Footer_withoutBg_cropped.png";

const Footer = () => {

  const footerStyles = {
    backgroundSize: 'cover',
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
  }

  return (
    <footer className={styles.footer} style={footerStyles}>

    </footer>
  )
}

export default Footer
