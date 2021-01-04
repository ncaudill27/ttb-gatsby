import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import MenuLink from './menuLink'

import styles from './menu.module.css'

const Menu = ({isOpen, toggleOpen, routes}) => {

  const styling =
    isOpen ? classNames(styles.menu, styles.open) : classNames(styles.menu)
  
  return (
    <div
      id='menu'
      className={styling}
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
      role='menu'
      aria-labelledby='menubutton'
      tabIndex={0}
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
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default Menu