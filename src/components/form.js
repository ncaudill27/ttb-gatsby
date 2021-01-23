import React, { useState, useEffect, createRef } from 'react'
import classNames from 'classnames'

import styles from './form.module.css'

const Form = ({sectionEl, showForm, toggleForm, children, ...props}) => {
  const formEl = createRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')
  
  const noScroll = top => e => {
    if (typeof window !== 'undefined') {
      console.log(top)
      window.scroll(0, top)
    }
  }

  useEffect(() => {
    console.log(sectionEl)
    if (showForm) {
      const formWidth = formEl.current.getBoundingClientRect().width;
      const formHeight = formEl.current.getBoundingClientRect().height;

      setLeft(`-${formWidth / 2}px`);
      setTop(`-${formHeight / 2}px`);
    }
  }, [showForm, formEl, sectionEl])

  const open = showForm ? styles.open : false;

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