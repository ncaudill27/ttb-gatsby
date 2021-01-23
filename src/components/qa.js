import React, { useState } from 'react'
import classNames from 'classnames'
import Chevron from './images/iconChevron'

import styles from './qa.module.css'

const QA = ({className, question, answer}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen( prev => !prev )

  const rootStyles = isOpen ? classNames(styles.root, styles.open) : classNames(styles.root)
  const iconStyles = isOpen ? classNames(styles.icon, styles.open) : classNames(styles.icon)
  const answerStyles = isOpen ? classNames(styles.answer, styles.open) : classNames(styles.answer)
  return (
    <li className={rootStyles} onClick={toggleOpen}>
      <div className={styles.question}>
        <p>{question}</p>
        <Chevron className={iconStyles} />
      </div>
      {<div className={answerStyles}>
          {answer}
        </div>}
    </li>
  )
}

export default QA