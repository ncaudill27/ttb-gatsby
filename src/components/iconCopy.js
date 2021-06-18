import React from "react"

import BeetIcon from "./images/beet"

import styles from "./iconCopy.module.css"

const IconCopy = ({ header, description }) => (
  <div className={styles.item}>
    <BeetIcon className={styles.icon} alt="black beet icon" />
    <div className={styles.copy}>
      <h3>{header}</h3>
      <p>{description}</p>
    </div>
  </div>
)

export default IconCopy
