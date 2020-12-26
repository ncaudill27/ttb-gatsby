import React from 'react'
import { Link } from 'gatsby'

import styles from './navlink.module.css'

const Navlink = ({path}) => {

  return (
    <Link to={path} className={styles.link} aria-role='button' tabIndex={0}>
      {path.replace(/\//g, '').toUpperCase()}
    </Link>
  )
}

export default Navlink