import React, { useState, useEffect, useRef } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import styles from './form.module.css'

const Form = ({showForm, toggleForm, resetForm, children, ...props}) => {
  const breakpoints = useBreakpoint()
  const formEl = useRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')
  useEffect(() => {
    if (!breakpoints.sm) {
      const formWidth = formEl.current.getBoundingClientRect().width
      const formHeight = formEl.current.getBoundingClientRect().height

      setLeft(`-${formWidth / 2}px`)
      setTop(`-${formHeight / 2}px`)
    }
  }, [showForm, formEl, breakpoints])


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
        ref={formEl}
        style={{marginLeft: left, marginTop: top}}
        {...props}
      >
        {children}
      </form>
    </>
  )

}

export default Form