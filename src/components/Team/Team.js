import React from 'react';
import Nav from '../CommonComp/Nav/Nav';
import Profile from './Profile/Profile';
import styles from "./Team.module.scss";
import img from "./sample.png";

function Team() {

  const people = [
    [img, 'Dev Manek', 'Chairperson', img, 'Cherry Bhatt', 'Vice-Chairperson'],
    [img, 'Ambar Mehta', 'Secretary', img, 'Naman Sanghavi', 'Secretary'],
    [img, 'Keta Suthar', 'Treasurer'],
    [img, 'Smeet Veera', 'Creatives Head', img, 'Parth Shah', 'Media Head'],
    [img, 'Krish Shah', 'Marketing Head', img, 'Vatsal Tolia', 'Marketing Head'],
    [img, 'Russel Lobo', 'Editorial Head'],
    [img, 'Arjav Parekh', 'Technical Head', img, 'Manan Doshi', 'Technical Head'],
    [img, 'Muskan Jain', 'Publicity Head', img, 'Dhairya Parikh', 'Events Head'],
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
    </div>
  )
}

export default Team
