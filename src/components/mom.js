import React from 'react'

import Section from './section'
import Dual from './dual'
import MomImage from './images/momImage'

import styles from './mom.module.css'

const Mom = () => (
  <Section className={styles.landing} color='pri-light' background>
    <Dual>
      <div className={styles.copy} first>
        <h1 className={styles.header}>
          Welcome
          to
          <br />
          The Tiny Beet,
        </h1>
        <p>
          After 30 years of practicing peds, I’m excited to announce the founding of my practice.
        </p>
        <p>
          We are a general pediatric Direct Primary Care (DPC) practice specializing in Lifestyle Medicine to be able to focus on the root cause of my patients’ health.
        </p>
        <p>
          "I invite you and your family to join me in improving the health in our community, a tiny step at a time."
        </p>
        <p>
          Dr. Yolanda Rivera-Caudill, MD, FAAP, DipABLM <br />
          -The Dr. Beet
        </p>
      </div>
      <MomImage className={styles.img} second />
    </Dual>
  </Section>
)

export default Mom