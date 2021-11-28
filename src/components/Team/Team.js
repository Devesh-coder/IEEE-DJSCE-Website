import React from 'react';
import Nav from '../CommonComp/Nav/Nav';
import Footer from '../CommonComp/Footer/Footer';
import Profile from './Profile/Profile';
import styles from "./Team.module.scss";
import img_dev from './Images/CP_Dev.svg'
import img_cherry from "./Images/CoCp_Cherry.svg"
import img_ambar from "./sample.png"
import img_naman from './Images/Sec_Naman.svg'
import img_keta from './Images/Fin_Keta.svg'
import img_smeet from './Images/Creatives_Smeet.svg'
import img_parth from './Images/Soc_Parth.svg'
import img_krish from './Images/Mark_Krish.svg'
import img_vatsal from './Images/Mark_Vatsal.svg'
import img_russel from './Images/Edi_Russel.svg'
import img_arjav from './Images/Tech_Arjav.svg'
import img_manan from './Images/Tech_Manan.svg'
import img_muskan from './Images/Pubs_Muskaan.svg'
import img_dhairya from './Images/Events_Dhairya.svg'

function Team() {

  const people = [
    [img_dev, 'Dev Manek', 'Chairperson', img_cherry, 'Cherry Bhatt', 'Vice-Chairperson'],
    [img_ambar, 'Ambar Mehta', 'Secretary', img_naman, 'Naman Sanghavi', 'Secretary'],
    [img_keta, 'Keta Suthar', 'Treasurer'],
    [img_smeet, 'Smeet Veera', 'Creatives Head', img_parth, 'Parth Shah', 'Media Head'],
    [img_krish, 'Krish Shah', 'Marketing Head', img_vatsal, 'Vatsal Tolia', 'Marketing Head'],
    [img_russel, 'Russel Lobo', 'Editorial Head'],
    [img_arjav, 'Arjav Parekh', 'Technical Head', img_manan, 'Manan Doshi', 'Technical Head'],
    [img_muskan, 'Muskan Jain', 'Publicity Head', img_dhairya, 'Dhairya Parikh', 'Events Head'],
  ]


  const TeamTileComp = () => {
    const comp = (
      people.map((people, index) => {

        if ((index + 1) % 3 === 0) {
          return (
            <div className={styles.teams__profile}>
              <Profile name={people[1]} title={people[2]} img={people[0]} />
            </div>
          )
        }
        else {
          return (
            <div className={styles.teams__profile}>
              <Profile name={people[1]} title={people[2]} img={people[0]} />
              <Profile name={people[4]} title={people[5]} img={people[3]} />
            </div>
          )
        }
      }))

    return comp;
  }



  return (
    <div className={styles.teams}>
      <Nav />
      <div className={styles.teams__body}>
        <h1 className={styles.teams__title}>
          Our Team
        </h1>
        <div className={styles.teams_tiles}>
          <TeamTileComp />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team
