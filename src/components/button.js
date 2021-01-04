import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './button.module.css'

const Button = ({className, children, ...props}) => {

  const [status, setStatus] = useState(classNames(className))

  const setActive = () => setStatus(classNames(className, styles.active))
  const setInactive = () => setStatus(classNames(className))

  const handleClick = () => {
    setActive()
    setTimeout(setInactive, 100)
  }
  
  return (
    <button
      onClick={handleClick}
      className={status}
      {...props}
    >
        {children}
    </button>
  )
}

Button.defaultProps = {
  className: styles.button,
  copy: 'button'
}

export default Button;