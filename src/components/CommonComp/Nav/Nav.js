import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cx from "classnames"
import styles from "./Nav.module.scss"
import { Context } from '../../ContextData'



const Nav = () => {

  const [baseData] = useContext(Context);
  const IEEELogoImg = baseData.navLogo;

  const navElements = [
    { title: "About Us", linkTo: "aboutUs", className: cx(styles.navElement) },
    { title: "Sponsors", linkTo: "sponsors", className: cx(styles.navElement) },
    { title: "Our Team", linkTo: "teams", className: cx(styles.navElement) },
    { title: "Events", linkTo: "events", className: cx(styles.navElement, styles.navEvents) },
  ]

  return (
    <div className={styles.navDiv}>

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
