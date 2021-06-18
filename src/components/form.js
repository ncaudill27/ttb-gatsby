import React, { useState, useEffect } from "react"

import Modal from '../components/modal'

import styles from "./form.module.css"

const Form = ({ showForm, closeForm, resetForm, children, ...props }) => {
  const [resetCalled, setResetCalled] = useState(false)
  useEffect(() => {
    if (!showForm && !resetCalled) {
      resetForm()
      setResetCalled(true)
    }
    if (showForm && resetCalled) setResetCalled(false)
  }, [showForm, resetForm, resetCalled, setResetCalled])

  return (
    <Modal onDismiss={closeForm}>
      <form className={styles.form} {...props}>
        {children}
      </form>
    </Modal>
  )
}

export default Form
