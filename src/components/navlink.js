import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { parsePath } from '../utils/parsePath'

import styles from './navlink.module.css'

const Navlink = ({path}) => {

  return (
    <Link to={path} className={styles.link} role='button' tabIndex={0}>
      <div className={styles.line}>
        {parsePath(path)}
      </div>
    </Link>
  )
}

Navlink.propTypes = {
  path: PropTypes.string.isRequired
}

export default Navlink