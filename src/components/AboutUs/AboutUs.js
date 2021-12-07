import React from 'react'
import cx from "classnames"
import Nav from '../CommonComp/Nav/Nav'
import styles from "./AboutUs.module.scss"

const AboutUs = () => {

  return (
    <div className={cx(styles.aboutUs)}>
      <Nav />

      <h1 className={cx(styles.Heading)} > About us </h1>
      <div className={cx(styles.content)} >IEEE is the world’s largest professional association for advancement of technology. 
      IEEE Brainwaves is the Student Chapter (code: 60401) of the IEEE in Dwarkadas J. Sanghvi College of Engineering.
      It is duly recognized by the IEEE, USA. IEEE Brainwaves was established in 1997. 
      The IEEE student chapter’s sole motive is to spread awareness regarding upcoming field of technology and
      keep interest groups to work together and take part in various competition. 
      The present committee of IEEE student chapter comprises of 12 members with 56 student members.</div>

      <br />

      <h1 className={cx(styles.Heading)} > Aim </h1>
      <div className={cx(styles.content)} >Our AIM is to spread awareness regarding upcoming field of technology and keep interest groups to work together and take part in various competitions. 
      We believe in leveraging technology for a better tomorrow.</div>

    </div>
  )
}

export default AboutUs
