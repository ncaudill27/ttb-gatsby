import React, { useState, useEffect, useRef } from 'react'

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
      tabIndex={1}
    />
    {routes.map( ({path}, idx) => {
      console.log('len: ', routes.length);
      console.log('idx: ', idx)
      const isLastLink = routes.length === idx + 1
      return (
        <MenuLink
          key={path}
          path={path}
          toggleOpen={toggleOpen}
          lastLink={isLastLink}
          tabIndex={idx + 2}
        />
      )
    })}
  </div>
  )
}

export default MenuLinks