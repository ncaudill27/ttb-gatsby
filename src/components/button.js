import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './button.module.css'

const Button = ({className, copy, outlined, ...props}) => {

  const [status, setStatus] = useState(classNames(className))

  const active = () => setStatus(classNames(className, styles.active))
  const inactive = () => setStatus(classNames(className))

  useEffect(() => {
    if (outlined) setStatus(classNames(className, styles.outlined))
  }, [])
  
  
  return (
    <button
      onMouseDown={active}
      onMouseUp={inactive}
      className={status}
      {...props}
    >
        {copy.toUpperCase()}
    </button>
  )
}

Button.defaultProps = {
  className: styles.button,
  outlined: false,
  copy: 'button'
}

export default Button;