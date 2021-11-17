import React, { useContext } from 'react'
import Nav from '../CommonComp/Nav/Nav'
import { Context } from '../ContextData';
import styles from "./Home.module.scss"

const Home = () => {

  const [baseData] = useContext(Context);

  document.body.style.backgroundColor = "black";

  return (
    <div className={styles.home}>
      <Nav />
      <h1>{baseData.name} Home</h1>
    </div>
  )
}

export default Home
