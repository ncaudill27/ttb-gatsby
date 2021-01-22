import React, { useState, useEffect, createRef } from 'react'
import classNames from 'classnames'

import styles from './form.module.css'

const Form = ({showForm, toggleForm, children, ...props}) => {
  const formEl = createRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')
  
  const noScroll = () => {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0)
    }
  }

  useEffect(() => {
    if (showForm) {
      const formWidth = formEl.current.getBoundingClientRect().width;
      const formHeight = formEl.current.getBoundingClientRect().height;
      const formTop = formEl.current.getBoundingClientRect().top;
      console.log(formTop)
      setLeft(`-${formWidth / 2}px`);
      setTop(`-${formHeight / 2}px`);

      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', noScroll)
      }
    }
    return () => window.removeEventListener('scroll', noScroll)
  }, [showForm, formEl, noScroll])

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