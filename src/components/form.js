import React, { useState, useEffect, useRef } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import styles from './form.module.css'

const Form = ({showForm, toggleForm, resetForm, children, ...props}) => {

  const [resetCalled, setResetCalled] = useState(false)
  useEffect(() => {
    if (!showForm && !resetCalled) {
      resetForm()
      setResetCalled(true)
    }
    if (showForm && resetCalled) setResetCalled(false)
  }, [showForm, resetForm, resetCalled, setResetCalled])

  return (
    <>
      <div
        className={styles.overlay}
        onClick={toggleForm}
        aria-hidden='true'
      />
      <form
        className={styles.form}
        {...props}
      >
        {children}
      </form>
    </>
  )

}

export default Form