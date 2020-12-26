import React from 'react'
import PropTypes from 'prop-types'

import MenuLink from './menuLink'

import styles from './menu.module.css'

const Menu = ({open, toggleOpen, routes}) => {

  return (
    <div
      role='button'
      tabIndex={0}
      className={`${styles.menu} ${open ? `${styles.open}` : ''}`}
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
    >
      <MenuLink path='/' />
      {
        routes.map( ({path}) => {
          return <MenuLink path={path} />
        })
      }
    </div>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default Menu