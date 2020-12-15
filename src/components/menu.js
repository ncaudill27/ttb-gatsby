import React from 'react'
import { Link } from 'gatsby'
// import useScroll from '../hooks/useScroll'

import MenuLink from './menuLink'
import CloseImage from './closeImage'

import styles from './menu.module.css'

const Menu = ({open, toggleOpen}) => {

  return (
    <div
      role='button'
      tabIndex={0}
      className={`${styles.menu} ${open ? `${styles.open}` : ''}`}
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
    >
      <CloseImage />
      <MenuLink to='/'>HOME</MenuLink>
      <MenuLink to='/about'>ABOUT</MenuLink>
      <MenuLink to='/contact'>CONTACT</MenuLink>
    </div>
  )
}

export default Menu