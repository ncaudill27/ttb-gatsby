import React from 'react'
import classNames from 'classnames'
import CalendlyButton from './calendlyButton'

import styles from './calendly.module.css'

const Calendly = (props) => (
  <div className={classNames(styles.root, props.className)}>
    <div className={styles.line}>
      <h2 className={styles.header}>
        I STILL WANT MORE INFORMATION
      </h2>
    </div>
    <h3 className={styles.title}>Schedule a meet &amp; greet with the Doctor Beet!</h3>
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