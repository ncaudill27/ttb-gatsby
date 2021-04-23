import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Background from './backgrounds/background'
import FruitsBackground from './backgrounds/fruits'
import CottageBackground from './backgrounds/cottage'
import CalendlyButton from './calendlyButton'

import styles from './comingSoon.module.css'

const ComingSoon = () => {
  const breakpoints = useBreakpoint()

  return (
    <Background
      color='pri-light'
      background={
      breakpoints.l
        ? CottageBackground
        : FruitsBackground
    }>
      <div className={styles.root}>
        <div className={styles.card}>
          <h1 className={styles.title}>
            Savannah’s 1st Pediatric Lifestyle Medicine DPC.
          </h1>
          <p className={styles.caption}>
            Dr. Caudill is pleased to announce her pediatric practice, The Tiny Beet. Secure your spot by scheduling a Meet &amp; Greet with Doctor Beet! Scroll on to learn more!
          </p>
          <CalendlyButton
            url='https://calendly.com/thetinybeet/meet-greet'
            pageSettings={{
              hideLandingPageDetails: true,
              hideEventTypeDetails: true,
            }}
          />
        </div>
      </div>
    </Background>
  )
}

export default ComingSoon