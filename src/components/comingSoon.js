import React from 'react'

import Section from './section'
import CalendlyButton from './calendlyButton'

import styles from './comingSoon.module.css'

const ComingSoon = () => (
  <Section color='pri-light' className={styles.root}>
    <h1 className={styles.title}>
      Coming soon!
    </h1>
    <p className={styles.caption}>
      Dr. Caudill is pleased to announce opening her pediatric practice, the tiny beet.
      Currently accepting Telemedicine patients.
    </p>
    <CalendlyButton
      url='https://calendly.com/thetinybeet/meet-greet'
      pageSettings={{
        hideLandingPageDetails: true,
        hideEventTypeDetails: true,
      }}
    />
  </Section>
)

export default ComingSoon