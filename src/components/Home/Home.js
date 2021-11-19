import React from 'react'
import Footer from '../CommonComp/Footer/Footer';
import Nav from '../CommonComp/Nav/Nav'
import Banner from './Banner/Banner';
import styles from "./Home.module.scss"
import OurEvents from './OurEvents/OurEvents';
import OurVision from './OurVision/OurVision';

const Home = () => {

  document.body.style.backgroundColor = "black";

  return (
    <div className={styles.home}>
      <div className={styles.homeNav}>
        <Nav />
      </div>
      <Banner />
      <OurVision />
      <OurEvents />
      <Footer />
    </div>
  )
}

export default Home
