import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'


import styles from './calendly.module.css'

const Atlas = (props) => (
  <div className={classNames(styles.root, props.className)}>
    <div className={styles.line}>
      <h2 className={styles.title}>
        I'M IN! SIGN ME UP
      </h2>
    </div>
    <h1>Click the button below to sign up with our EMR.</h1>
    <Link className={styles.link}>
      Become a Member
    </Link>
  </div>
)

export default Atlas