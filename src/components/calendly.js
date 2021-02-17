import React from 'react'
import classNames from 'classnames'

import CalendlyButton from './calendlyButton'

import styles from './calendly.module.css'

const Calendly = (props) => (
  <div className={classNames(styles.root, props.className)}>
    <div className={styles.line}>
      <h2 className={styles.header}>
        READY TO BECOME A MEMBER?
      </h2>
    </div>
    <h3 className={styles.title}>Click below to schedule a zoom meet &amp; greet with the Doctor Beet!</h3>
    <CalendlyButton
      url='https://calendly.com/thetinybeet/meet-greet'
      pageSettings={{
        hideLandingPageDetails: true,
        hideEventTypeDetails: true
      }}
    />
  </div>
)

export default Calendly