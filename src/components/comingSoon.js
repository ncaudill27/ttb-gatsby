import React from 'react'

import Background from './backgrounds/background'
import FruitsBackground from './backgrounds/fruits'
import CalendlyButton from './calendlyButton'

import styles from './comingSoon.module.css'

const ComingSoon = () => (
  <Background color='pri-light' background={FruitsBackground}>
    <div className={styles.root}>
      <h1 className={styles.title}>
        Coming soon!
      </h1>
      <p className={styles.caption}>
        Dr. Caudill is pleased to announce the opening of her pediatric practice, the tiny beet.
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
    </div>
  </Background>
)

export default ComingSoon