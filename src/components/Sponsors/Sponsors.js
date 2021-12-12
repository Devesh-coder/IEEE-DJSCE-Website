import React from 'react'
import Nav from '../CommonComp/Nav/Nav'
import Footer from '../CommonComp/Footer/Footer'
import Sponsor from './Sponsor/Sponsor'
import styles from "./Sponsors.module.scss"
import afs_img from "../../images/Sponsors/a-fragrance-story-logo.png"
import bal_img from "../../images/Sponsors/Bade Log.png"
import cob_img from "../../images/Sponsors/Coding Blocks.png"
import con_img from "../../images/Sponsors/Coding Ninjas.png"
import ddm_img from "../../images/Sponsors/Dudeme.png"
import gfg_img from "../../images/Sponsors/gfg_.png"
import inb_img from "../../images/Sponsors/InterviewBuddy_Logo_White (1).png"
import prb_img from "../../images/Sponsors/Prep Bytes.png"
import spb_img from "../../images/Sponsors/Spin Bot.png"
import syb_img from "../../images/Sponsors/SYBGEN-1.png"

const data = [
  {
    img: afs_img,
    website: "https://afragrancestory.in/",
    email: "",
    name: "A Fragnance Story"
  },
  {
    img: bal_img,
    website: "https://badelog.in/",
    email: "",
    name: "Bade Log"
  },
  {
    img: cob_img,
    website: "https://codingblocks.com/",
    email: "",
    name: "Coding Blocks"
  },
  {
    img: con_img,
    website: "https://www.codingninjas.com/",
    email: "",
    name: "Coding Ninjas"
  },
  {
    img: ddm_img,
    website: "https://www.dudeme.in/",
    email: "",
    name: "Dude Me"
  },
  {
    img: gfg_img,
    website: "https://www.geeksforgeeks.org/",
    email: "campus@geeksforgeeks.org",
    name: "GeeksforGeeks"
  },
  {
    img: inb_img,
    website: "https://interviewbuddy.in/",
    email: "",
    name: "InterviewBuddy"
  },
  {
    img: prb_img,
    website: "https://www.prepbytes.com/",
    email: "",
    name: "PrepBytes"
  },
  {
    img: spb_img,
    website: "https://spinbot.co.in/",
    email: "",
    name: "SpinBot"
  },
  {
    img: syb_img,
    website: "https://sybgen.com/",
    email: "",
    name: "SYBGEN"
  }
];

const Sponsors = () => {
  return (
    <div>
      <Nav />
      <h1 className={styles.ourSponsors}>Our Sponsors</h1>
      <div className={styles.sponsorContainer}>
      {
        data.map((item,key) => (
          <Sponsor img={item.img} key={key} website={item.website} name={item.name} />
        ))
      }
      </div>
      <Footer />
    </div>
  )
}

export default Sponsors
