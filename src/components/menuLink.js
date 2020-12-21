import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './menuLink.module.css'

const MenuLink = ({to, children}) => {

  let active = window.location.pathname === to
  
  if (!to) return null;
  return (
    <div
      role='menuitemradio'
      aria-checked={active}
      className={`${styles.menuItem} ${ active ? styles.active : styles.inactive }`}
      tabIndex={0}  
    >
      <Link to={to} className={styles.link}>
        {children}
      </Link>
    </div>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}  

export default MenuLink;