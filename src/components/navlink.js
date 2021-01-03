import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './navlink.module.css'

const Navlink = ({path}) => {

  return (
    <Link to={path} className={styles.link} role='button' tabIndex={0}>
      {path.replace(/\//g, '').toUpperCase()}
    </Link>
  )
}

Navlink.propTypes = {
  path: PropTypes.string.isRequired
}

export default Navlink