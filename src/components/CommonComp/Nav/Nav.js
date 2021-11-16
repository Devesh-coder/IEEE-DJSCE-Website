import React from 'react'
import { Link } from 'react-router-dom'
import cx from "classnames"
import styles from "./Nav.module.scss"
import IEEELogoImg from "../../../images/IEEELogo.svg"



const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={cx(styles.firstNav)}>
        <Link to={'/'} className={styles.navLogo}>
          <img src={IEEELogoImg} alt="" />
        </Link>
      </div>
      <div className={cx(styles.secondNav)}>
        <Link to={'/aboutUs'}>About Us</Link>
        <Link to={'/sponsors'}>Our Sponsors</Link>
        <Link to={'/events'}>Events</Link>
      </div>
    </nav>
  )
}

export default Nav
