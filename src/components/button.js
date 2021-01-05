import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './button.module.css'
import '../styles/custom-properties.css'

const Button = ({className, color, children, ...props}) => {

  const [status, setStatus] = useState(classNames(className))

  const setActive = () => setStatus(classNames(className, styles.active))
  const setInactive = () => setStatus(classNames(className))

  const handleClick = () => {
    setActive()
    setTimeout(setInactive, 100)
  }

  const handleColor = () => {
    if (
      color === 'beet'
      || color  === 'blueberry'
      || color  === 'grapefruit'
    ) {
      return { backgroundColor: `var(--${color})`, color: 'white' }
    }

    return { backgroundColor: `var(--${color})` }
  }
  
  color = handleColor()

  return (
    <button
      onClick={handleClick}
      className={status}
      style={color}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'pri-light',
    'pri-med',
    'pri-dark',
    'sec-light',
    'sec-dark',
    'carrot',
    'grapefruit',
    'beet',
    'blueberry',
  ])
}

Button.defaultProps = {
  className: styles.button,
  color: 'beet',
}

export default Button;