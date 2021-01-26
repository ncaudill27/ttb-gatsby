import React, { useState, useEffect, createRef } from 'react'
import classNames from 'classnames'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import styles from './form.module.css'

const Form = ({showForm, toggleForm, children, ...props}) => {
  const breakpoints = useBreakpoint()
  const formEl = createRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')

  useEffect(() => {
    if (!breakpoints.sm) {
      const formWidth = formEl.current.getBoundingClientRect().width;
      const formHeight = formEl.current.getBoundingClientRect().height;

      setLeft(`-${formWidth / 2}px`);
      setTop(`-${formHeight / 2}px`);
    }
  }, [showForm, formEl, breakpoints])

  const open = showForm ? styles.open : false

  return (
    <>
      <div
        className={classNames(styles.overlay, open)}
        onClick={toggleForm}
      />
      <form
        className={classNames(styles.form, open)}
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