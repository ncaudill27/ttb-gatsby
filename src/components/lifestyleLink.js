import React from "react"

import styles from "./lifestyleLink.module.css"

const LifestyleLink = ({ to, copy }) => (
  <li className={styles.root}>
    <a href={to} className={styles.link}>
      {copy}
    </a>
  </li>
)

export default LifestyleLink
