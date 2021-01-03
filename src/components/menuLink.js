import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './menuLink.module.css'

const MenuLink = ({path}) => {
  
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsActive(window.location.pathname === path)
    }
  }, [path])

  const copy = path === '/' ? 'HOME' : path.replace(/\//g, '').toUpperCase()
  
  if (!path) return null;

  return (
    <Link to={path} className={styles.link}>
      <div
        role='menuitemradio'
        aria-checked={isActive}
        className={`${styles.menuItem} ${ isActive ? styles.active : styles.inactive }`}
        tabIndex={0}  
      >
          {copy}
      </div>
    </Link>
  );
}

MenuLink.propTypes = {
  path: PropTypes.string.isRequired
}  

export default MenuLink;