import React from 'react'

import styles from './textField.module.css'

const TextField = ({id, name, placeholder, handleChange}) => {

  const parseLabel = () => {
    // space 'camelCase' into 'camel Case'
    const titleizeRest = id.replace(/([A-Z])/g, ' $1')

    // capitalize first letter and attach the rest
    // resulting in 'camel Case' to 'Camel Case'
    const titleized = titleizeRest.charAt(0).toUpperCase() + titleizeRest.slice(1)
    
    return titleized
  }


  return <div className={styles.container}>
    <label
      className={styles.label}
      htmlFor={id}
    >
      {parseLabel()}
    </label>
    <input
      id={id}
      className={styles.input}
      value={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>

}

export default TextField