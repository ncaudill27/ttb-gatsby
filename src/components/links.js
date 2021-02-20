import React, { useEffect, useRef } from 'react'

import MenuLink from './menuLink'

import styles from './links.module.css'

const MenuLinks = ({routes, toggleOpen}) => {
  const firstLinkEl = useRef()

  useEffect(() => {
    firstLinkEl.current.focus()
  }, [])

  return (
    <div
      id='menu'
      className={styles.root}
      role='menu'
      aria-labelledby='menubutton'
    >
    <MenuLink
      ref={firstLinkEl}
      path='/'
      toggleOpen={toggleOpen}
    />
    {routes.map( ({path}) => (
      <MenuLink
        key={path}
        path={path}
        toggleOpen={toggleOpen}
      />
    ))}
  </div>
  )
}

export default MenuLinks