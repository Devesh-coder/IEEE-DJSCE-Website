import React from 'react'
import Footer from '../CommonComp/Footer/Footer';
import Nav from '../CommonComp/Nav/Nav'
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import styles from "./Home.module.scss"
import OurEvents from './OurEvents/OurEvents';
import OurVision from './OurVision/OurVision';
import UpcomingEvent from './UpcomingEvent/UpcomingEvent';

const Home = () => {

  document.body.style.backgroundColor = "black";

  return (
    <div className={styles.home}>
      <div className={styles.homeNav}>
        <Nav />
      </div>
      <Banner />
      <div className={styles.flexDiv}>
        <OurVision />
        <OurEvents />
        <UpcomingEvent />
        <Blogs />
      </div>
      <Footer />
    </div>
  )
}

export default Home
