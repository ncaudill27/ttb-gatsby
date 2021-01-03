import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './menuLink.module.css'

const MenuLink = ({path}) => {

  if (typeof window !== 'undefined') return null
  
  const active = window.location.pathname === path
  const copy = path === '/' ? 'HOME' : path.replace(/\//g, '').toUpperCase()
  
  if (!path) return null;

  return (
    <Link to={path} className={styles.link}>
      <div
        role='menuitemradio'
        aria-checked={active}
        className={`${styles.menuItem} ${ active ? styles.active : styles.inactive }`}
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