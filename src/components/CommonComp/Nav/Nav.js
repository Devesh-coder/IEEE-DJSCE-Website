import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import cx from "classnames"
import styles from "./Nav.module.scss"
import { Context } from '../../ContextData'
import ProgressBar from '../ProgressBar/ProgressBar'



const Nav = () => {

  const [baseData] = useContext(Context);
  const IEEELogoImg = baseData.navLogo;

  const [isScrolled, handleIsScrolled] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 70) {
      handleIsScrolled(true);
    } else {
      handleIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const navElements = [
    { title: "About Us", linkTo: "aboutUs", className: cx(styles.navElement) },
    { title: "Sponsors", linkTo: "sponsors", className: cx(styles.navElement) },
    { title: "Our Team", linkTo: "teams", className: cx(styles.navElement) },
    { title: "Events", linkTo: "events", className: cx(styles.navElement, styles.navEvents) },
  ]

  return (
    <div className={cx(styles.navDiv, isScrolled ? cx(styles.nav_dark) : "")}>
      <ProgressBar />

      <nav className={styles.nav}>

        <div className={cx(styles.firstNav)}>
          <Link to={'/'} className={styles.navLogo}>
            <img src={IEEELogoImg} alt="" />
          </Link>
        </div>


        <div className={cx(styles.secondNav)}>
          {
            navElements.map((element, key) => (
              <Link to={`/${element.linkTo}`} key={key} className={element.className}>
                {element.title}
              </Link>
            ))
          }
        </div>
      </nav>
    </div>
  )
}

export default Nav
