import React from 'react'

import Section from './section'

import styles from './comingSoon.module.css'

const ComingSoon = () => (
  <Section color='pri-light' className={styles.root}>
    <h1 className={styles.title}>
      Coming soon! Dr. Caudill is pleased to announce opening her pediatric practice, the tiny beet.
    </h1>
    <p className={styles.caption}>
      Currently accepting Telemedicine patients.
    </p>
  </Section>
)

export default ComingSoon