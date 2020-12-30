import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './button.module.css'

const Button = ({className, copy, ...props}) => {

  const [status, setStatus] = useState(classNames(className))

  const active = () => setStatus(classNames(className, styles.active))
  const inactive = () => setStatus(classNames(className))
  
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
  copy: 'button'
}

export default Button;