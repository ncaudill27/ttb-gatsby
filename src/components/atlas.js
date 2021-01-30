import React from 'react'
import classNames from 'classnames'


import styles from './calendly.module.css'

const Atlas = (props) => (
  <div className={classNames(styles.root, props.className)}>
    <div className={styles.line}>
      <h2 className={styles.header}>
        I'M IN! SIGN ME UP
      </h2>
    </div>
    <h3 className={styles.title}>Click the button below to sign up with our EMR.</h3>
    <a href='/' className={styles.link} tabIndex={0}>
      {/* TODO add link to patient portal */}
      Become a Member
    </a>
  </div>
)

export default Atlas