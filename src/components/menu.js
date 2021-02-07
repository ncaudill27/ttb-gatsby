import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import MenuButton from './menuButton'
import MenuLink from './menuLink'

import styles from './menu.module.css'

const Menu = ({routes}) => {
  const linksEl = useRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')
  useEffect(() => {
      const linksWidth = linksEl.current.getBoundingClientRect().width
      const linksHeight = linksEl.current.getBoundingClientRect().height

      setLeft(`-${linksWidth / 2}px`)
      setTop(`-${linksHeight / 2}px`)
  }, [])

  const [isOpen, setOpen] = useState(false)
  const toggleOpen = () => setOpen( prev => !prev )

  const handleKeyDown = e => {
    // if enter key
    if (e.keyCode === 13) toggleOpen()
  }

  const openStyles =
    isOpen
      ? styles.open
      : false

      console.log(linksEl);
  
  return (
    <>
      <MenuButton
        id='menubutton'
        className={styles.button}
        // handlers
        onKeyDown={handleKeyDown}
        onClick={toggleOpen}
        // accessibility
        tabIndex={0}
        handleKeyDown={handleKeyDown}
        role='button'
        aria-haspopup='true'
        aria-controls='menu'
        aria-expanded={isOpen}
      />
      <div
        className={classNames(styles.overlay, openStyles)}
        aria-hidden='true'
        onClick={toggleOpen}
      />
      <div
        id='menu'
        ref={linksEl}
        className={classNames(styles.menu, openStyles)}
        style={{marginLeft: left, marginTop: top}}
        onKeyDown={handleKeyDown}
        role='menu'
        aria-labelledby='menubutton'
        tabIndex={0}
      >
        <MenuLink path='/' />
        {routes.map( ({path}) => (
          <MenuLink path={path} key={path} />
        ))}
      </div>
    </>
  )
}

Menu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
}

export default Menu