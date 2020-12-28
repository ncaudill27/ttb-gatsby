import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Section from './section'

import styles from './intro.module.css'

const Intro = () => {

  const breakpoints = useBreakpoint()

  return (
      <Section className={styles.landing} color='pri-light' background>
          <h1 className={styles.header}>
            Welcome 
            {breakpoints.sm ? <br /> : ' '}
            to
            <br />
            The Tiny Beet
          </h1>
          <div className={styles.intro}>
            <p>
              After being in Savannah for 12 years, many of you already know me as Dr. Yolanda Rivera-Caudill.
              I’m ecstatic to announce that I will be opening my own practice: The Tiny Beet Lifestyle Medicine Pediatrics.
            </p>
            <p>
              At The Tiny Beet we strive to provide a comprehensive medical approach to our
              patients—doing more than just treating illnesses.
            </p>
            <p>
              Keep scrolling to read more on how my team and I are making this possible.
            </p>
          </div>
      </Section>
  )
}

export default Intro