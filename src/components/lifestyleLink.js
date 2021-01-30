import React from 'react'
import { Link } from "gatsby"

import styles from './lifestyleLink.module.css'

const LifestyleLink = ({to, copy}) => (
  <li className={styles.root}>
    <a href={to} className={styles.a}>
      {copy}
    </a>
  </li>
)

export default LifestyleLink