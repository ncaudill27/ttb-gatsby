import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { parsePath } from '../utils/parsePath'

import styles from './menuLink.module.css'

const MenuLink = ({path}) => {
  
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsActive(window.location.pathname === path)
    }
  }, [path])

  const copy =
    path === '/' ? 'HOME' : parsePath(path)

  const styling =
    isActive ? classNames(styles.menuItem, styles.active) : classNames(styles.menuItem, styles.inactive)
  
  if (!path) return null;
  return (
    <Link
      to={path}
      className={styles.link}
      tabIndex={-1}
    >
      <div className={styling} role='menuitem' tabIndex={0}>
          {copy}
      </div>
    </Link>
  );
}

MenuLink.propTypes = {
  path: PropTypes.string.isRequired
}  

export default MenuLink;