import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import MenuButton from './menuButton'
import MenuLink from './menuLink'

import styles from './menu.module.css'

const Menu = ({routes}) => {

  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen( prev => !prev )

  const handleKeyDown = e => {
    // if enter key
    if (e.keyCode === 13) {
      toggleOpen()
    }
  }

  const styling =
    isOpen ? classNames(styles.menu, styles.open) : classNames(styles.menu)
  
  return (
    <>
      <MenuButton
        id='menubutton'
        handleClick={toggleOpen}
        handleKeyDown={handleKeyDown}
        aria-haspopup='true'
        aria-controls='menu'
        aria-expanded={isOpen}
      />
      <div
        id='menu'
        className={styling}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        role='menu'
        aria-labelledby='menubutton'
        tabIndex={0}
      >
        <MenuLink path='/' />
        {
          routes.map( ({path}) => {
            return <MenuLink path={path} key={path} />
          })
        }
      </div>
    </>
  )
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default Menu