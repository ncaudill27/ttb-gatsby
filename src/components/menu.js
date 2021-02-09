import React, { useState } from 'react'
import { handleEnterKey } from '../utils/handlers'
import PropTypes from 'prop-types'

import MenuButton from './menuButton'
import MenuLinks from './links'

import styles from './menu.module.css'

const Menu = ({routes}) => {
  
  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen( prev => !prev )

  return (
    <>
      <MenuButton
        id='menubutton'
        className={styles.button}
        // handlers
        onKeyDown={toggleOpen}
        onClick={toggleOpen}
        // accessibility
        tabIndex={0}
        onKeyDown={handleEnterKey(toggleOpen)}
        role='button'
        aria-haspopup='true'
        aria-controls='menu'
        aria-expanded={isOpen}
      />
      {isOpen && <>
        <div
          className={styles.overlay}
          aria-hidden='true'
          onClick={toggleOpen}
        />
        <MenuLinks
          toggleOpen={toggleOpen}
          routes={routes}
        />
      </>}
    </>
  )
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default Menu