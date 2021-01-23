import React from 'react'

import styles from './qa.module.css'

const QA = ({question, answer}) => (
  <li className={styles.question}>
    {question}
  </li>
)

export default QA