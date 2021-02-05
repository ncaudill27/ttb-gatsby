import React from 'react'

import Section from './section'

import styles from './intro.module.css'

const Intro = () => (
  <Section color='pri-light' style={{padding: '14rem 1rem'}}>
    <h1 className={styles.title}>
      Coming soon! Dr. Caudill is pleased to announce opening her pediatric practice, the tiny beet.
    </h1>
    <p className={styles.caption}>
      Currently accepting Telemedicine patients.
    </p>
  </Section>
)

export default Intro