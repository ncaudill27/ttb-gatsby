import React, { useState } from 'react'
import classNames from 'classnames'
import Chevron from './images/iconChevron'

import styles from './qa.module.css'

const QA = ({className, question, answer}) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen( prev => !prev )

  const rootStyles = isOpen ? classNames(styles.root, styles.open) : classNames(styles.root)
  const iconStyles = isOpen ? classNames(styles.icon, styles.open) : classNames(styles.icon)

  return (
    <li className={rootStyles} onClick={toggleOpen}>
      <div className={styles.question}>
        <p>{question}</p>
        <Chevron className={iconStyles} />
      </div>
      {isOpen && (
        <div className={styles.answer}>
          {answer}
        </div>
      )}
    </li>
  )
}

export default QA