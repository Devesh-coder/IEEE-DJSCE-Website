import React from 'react'
import cx from "classnames";
import Nav from '../CommonComp/Nav/Nav'
import styles from './Events.module.scss'

const Events = () => {
  return (
    <div>
      <Nav />      
      <div className={cx(styles.Events)}>
        <p>Events</p>
        <div>
          <button>2017</button>
          <button>2018</button>
          <button>2019</button>
          <button>2020</button>
          <button>2021</button>
        </div>
      </div>
      
    </div>
  )
}

export default Events
