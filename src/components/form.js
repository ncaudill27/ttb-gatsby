import React, { useState, useEffect, createRef } from 'react'

const Form = ({showForm, toggleForm, children}) => {
  const formEl = createRef()

  const [left, setLeft] = useState('0px')
  const [top, setTop] = useState('0px')

  useEffect(() => {
    if (showForm) {
      const formWidth = formEl.current.getBoundingClientRect().width;
      const formHeight = formEl.current.getBoundingClientRect().height;
      setLeft(`-${formWidth / 2}px`);
      setTop(`-${formHeight / 2}px`);
    }
  }, [showForm])

  return (
    <>
      <div
        className={`overlay${shown ? ' open' : ''}`}
        onClick={toggleForm}
      />
      <form
        className={`${shown ? 'open' : ''}`}
        ref={formEl}
        style={{marginLeft: left, marginTop: top}}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </>
  )

}

export default Form