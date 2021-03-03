import React from 'react'

import Section from './section'
import Dual from './dual'
import MomImage from './images/momImage'

import styles from './mom.module.css'

const Mom = () => (
  <Section className={styles.landing} color='sec-dark'>
    <div className={styles.intro}>
      <h2 className={styles.title}>A LETTER FROM THE DOC</h2>
    </div>
    <Dual>
      <div className={styles.copy} first>
        <h1 className={styles.header}>
          Hi, I'm Dr. Yolanda Rivera-Caudill.
        </h1>
        <p>
          Also known as Dr. Caudill, or most recently, the Dr. Beet. After 30 years as a Pediatrician, I’m excited to announce the founding of my practice. The Tiny Beet is a general pediatric direct primary care (DPC) practice specializing in Lifestyle Medicine in order to focus on the root cause of my patients’ health.
        </p>
        <p>
          I invite you and your family to join me in improving the health in our Savannah community, a tiny step at a time.
        </p>
        <p>
          Dr. Yolanda Rivera-Caudill, MD, FAAP, DipABLM <br/>
          “The Dr. Beet” 
        </p>
      </div>
      <MomImage className={styles.img} second />
    </Dual>
  </Section>
)

export default Mom