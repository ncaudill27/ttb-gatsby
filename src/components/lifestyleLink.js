import React from 'react'
import { Link } from "gatsby"

import styles from './lifestyleLink.module.css'

const LifestyleLink = ({to, copy}) => (
  <li className={styles.root}>
    <Link to={to} className={styles.link}>
      {copy}
    </Link>
  </li>
)

export default LifestyleLink