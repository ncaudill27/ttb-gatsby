import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { parsePath } from '../utils/parse'

import styles from './menuLink.module.css'

const MenuLink = React.forwardRef(({path}, ref) => {
  
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

  return (
    <Link
      to={path}
      className={styles.link}
      ref={ref}
    >
      <div
        className={styling}
        role='menuitem'
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