import React from 'react'

import Section from './section'

import styles from './intro.module.css'

const Intro = () => (
  <Section color='pri-light' className={styles.landing}>
    <div>
      <h1 className={styles.header}>
        Welcome 
        <br /> {/* add useBreakpoint here */}
        to
        <br />
        The Tiny Beet
      </h1>
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

export default Intro