import React from "react"

import BoardIcon from "./images/iconBoard"
import ClockIcon from "./images/iconClock"
import DoctorIcon from "./images/iconDoctor"
import HoopIcon from "./images/iconHoop"
import HouseIcon from "./images/iconHouse"
import PhoneIcon from "./images/iconPhone"
// import SyringeIcon from './images/iconSyringe'
import TimerIcon from "./images/iconTimer"
import VeggiesIcon from "./images/iconVeggies"

import styles from "./dpcGrid.module.css"

const Grid = () => (
  <div className={styles.container}>
    <div className={styles.grid}>
      <div className={styles.board}>
        <BoardIcon
          className={styles.icon}
          alt="minimalist outline of a cutting board with a chef's knife carrots, tofu, tomatoes"
        />
        <p>teaching how to cook healthy meals</p>
        <p>(with budget and timing in mind)</p>
      </div>
      <div className={styles.clock}>
        <ClockIcon
          className={styles.icon}
          alt="minimalist outline of a clock"
        />
        <p>30min visits with the doctor</p>
      </div>
      <div className={styles.doctor}>
        <DoctorIcon
          className={styles.icon}
          alt="minimalist outline of a doctor wearing a mask"
        />
        <p>in-office visits</p>
      </div>
      <div className={styles.hoop}>
        <HoopIcon
          className={styles.icon}
          alt="minimalist outline of basketball hoop"
        />
        <p>sport physicals</p>
      </div>
      <div className={styles.house}>
        <HouseIcon
          className={styles.icon}
          alt="minimalist outline of the front of a house"
        />
        <p>at home visits for newborns</p>
      </div>
      <div className={styles.phone}>
        <PhoneIcon
          className={styles.icon}
          alt="minimalist outline of a phone with a masked doctor on the screen"
        />
        <p>text, phone, telemedicine</p>
      </div>
      <div className={styles.timer}>
        <TimerIcon
          className={styles.icon}
          alt="minimalist outline of an hourglass"
        />
        <p>minimal or no wait times in waiting room</p>
      </div>
      <div className={styles.veggies}>
        <VeggiesIcon
          className={styles.icon}
          alt="minimalist outline of vegetables"
        />
        <p>Lifestyle Medicine teachings</p>
      </div>
    </div>
  </div>
)

export default Grid
