import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { parsePath } from '../utils/parse'
import { handleEscKey, handleTabKey } from '../utils/handlers'

import styles from './menuLink.module.css'

const MenuLink = React.forwardRef(({path, toggleOpen, lastLink}, ref) => {
  
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsActive(window.location.pathname === path)
    }
  }, [path])

  const copy =
    path === '/'
      ? 'HOME'
      : parsePath(path)

  const styling =
    isActive
      ? classNames(styles.menuItem, styles.active)
      : classNames(styles.menuItem, styles.inactive)
  
  const handleKey = e => {
    if (lastLink) {
      if (e.keyCode === 13) toggleOpen()
    } else {
      handleEscKey(toggleOpen)
    }
  }

  console.log(lastLink);
  return (
    <Link
      to={path}
      className={styles.link}
      onKeyDown={handleKey}
      ref={ref}
    >
      <div
        className={styling}
        role='menuitem'
        tabIndex={-1}
      >
        {copy}
      </div>
    </Link>
  )
})

MenuLink.propTypes = {
  path: PropTypes.string.isRequired
}  

export default MenuLink;