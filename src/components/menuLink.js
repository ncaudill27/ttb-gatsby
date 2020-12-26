import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './menuLink.module.css'

const MenuLink = ({path}) => {

  const active = window.location.pathname === path
  const copy = path === '/' ? 'HOME' : path.replace(/\//g, '').toUpperCase()
  
  if (!path) return null;

  return (
    <div
      role='menuitemradio'
      aria-checked={active}
      className={`${styles.menuItem} ${ active ? styles.active : styles.inactive }`}
      tabIndex={0}  
    >
      <Link to={path} className={styles.link}>
        {copy}
      </Link>
    </div>
  );
}

MenuLink.propTypes = {
  path: PropTypes.string.isRequired
}  

export default MenuLink;