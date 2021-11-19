import React, { useContext } from 'react'
import Nav from '../CommonComp/Nav/Nav'
import { Context } from '../ContextData';
import Banner from './Banner/Banner';
import styles from "./Home.module.scss"

const Home = () => {

  const [baseData] = useContext(Context);

  document.body.style.backgroundColor = "black";

  return (
    <div className={styles.home}>
      <div className={styles.homeNav}>
        <Nav />
      </div>
      <Banner />
      {/* <h1>{baseData.name} Home</h1> */}
    </div>
  )
}

export default Home
