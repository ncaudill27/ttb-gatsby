import React from 'react'
import classNames from 'classnames'

import CalendlyButton from './calendlyButton'

import styles from './calendly.module.css'

const Calendly = (props) => (
  <div className={classNames(styles.root, props.className)}>
    <div className={styles.line}>
      <h2 className={styles.title}>
        I STILL WANT MORE INFORMATION
      </h2>
    </div>
    <h1>Schedule a meet &amp; greet with the Doctor Beet!</h1>
    <CalendlyButton url='https://calendly.com/nelson-a-caudill/initial-meet' />
  </div>
)

export default Calendly