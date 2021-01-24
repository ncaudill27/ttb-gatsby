import React from 'react'

import Section from './section'
import Dual from './dual'

import styles from './pricing.module.css'

const Pricing = () => (
  <Section color='pri-med'>
    <Dual className={styles.dual}>
      <div className={styles.first} first>
        <h1 className={styles.title}>How the direct patient care Membership model works.</h1>
      </div>
      <div className={styles.second} second>
        <p className={styles.copy}>
          I know you may have many questions. Please take a look at our FAQ section or schedule an online meet and greet with me personally. 
        </p>
      </div>
    </Dual>
    <div style={{display: 'flex', justifyContent: 'center'}}>

    </div>
  </Section>
)

export default Pricing