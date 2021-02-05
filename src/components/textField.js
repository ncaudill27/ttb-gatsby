import React from 'react'
import classNames from 'classnames'

import styles from './textField.module.css'

const TextField = React.forwardRef(({id, name, handleChange, error, ...props}, ref) => {

  const parseLabel = () => {
    // space 'camelCase' into 'camel Case'
    const titleizeRest = id.replace(/([A-Z])/g, ' $1')

    // capitalize first letter and attach the rest
    // resulting in 'camel Case' to 'Camel Case'
    const titleized = titleizeRest.charAt(0).toUpperCase() + titleizeRest.slice(1)
    
    return titleized
  }

  const inputStyles =
    error
    ? classNames(styles.input, styles.error)
    : styles.input
  
  return <div className={styles.container}>
    <label
      className={styles.label}
      htmlFor={id}
    >
      {parseLabel()}
    </label>
    <input
      id={id}
      ref={ref}
      className={inputStyles}
      value={name}
      onChange={handleChange}
      {...props}
    />
  </div>

})

export default TextField