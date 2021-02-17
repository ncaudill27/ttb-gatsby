import React from 'react'

import Section from './section'

import styles from './comingSoon.module.css'

const AboutIntro = () => (
  <Section className={styles.root} color='pri-dark' background>
      <h1 className={styles.title}>
        The Tiny Beet is Savannah’s first Lifestyle Medicine pediatric practice.
      </h1>
      <p className={styles.caption}>
        We focus on a child's overall wellbeing.
      </p>
  </Section>
)

export default AboutIntro