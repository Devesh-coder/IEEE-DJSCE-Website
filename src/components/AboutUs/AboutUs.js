import React from 'react'
import cx from "classnames"
import Nav from '../CommonComp/Nav/Nav'
import styles from "./AboutUs.module.scss"

const AboutUs = () => {

  return (
    <div className={cx(styles.aboutUs)}>
      <Nav />
      About Us
    </div>
  )
}

export default AboutUs
