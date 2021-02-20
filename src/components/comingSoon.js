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
      Dr. Caudill is pleased to announce opening of her pediatric practice, the tiny beet.
      She is currently accepting Telemedicine patients.
      Click below to schedule a meet and greet with the doctor to get your membership started, or scroll on to learn more!
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