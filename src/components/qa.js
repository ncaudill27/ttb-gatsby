import React, { useState } from "react"
import classNames from "classnames"
import Chevron from "./images/iconChevron"

import styles from "./qa.module.css"

const QA = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(prev => !prev)
  const handleEnterKey = e => {
    if (e.keyCode === 13) toggleOpen()
  }

  const rootStyles = isOpen
    ? classNames(styles.root, styles.open)
    : classNames(styles.root)
  const iconStyles = isOpen
    ? classNames(styles.icon, styles.open)
    : classNames(styles.icon)
  const answerStyles = isOpen
    ? classNames(styles.answer, styles.open)
    : classNames(styles.answer)
  return (
    <li>
      <div
        className={rootStyles}
        onClick={toggleOpen}
        onKeyDown={handleEnterKey}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className={styles.question}>
          <p>{question}</p>
          <Chevron className={iconStyles} aria-hidden="true" />
        </div>
        {<div className={answerStyles}>{answer}</div>}
      </div>
    </li>
  )
}

export default QA
