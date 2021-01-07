import React from 'react'

import Section from './section'
import Dual from './dual'
import CalendlyButton from './calendlyButton'

import styles from './calendly.module.css'

const Calendly = () => (
  <Section color='sec-dark' background>
    <Dual>
      <div first>
        <h2 className={styles.ready}>
          <div className={styles.line}>
            READY TO BECOME A MEMBER?
          </div>
        </h2>
        <h1>Schedule a meet &amp; greet with the Doctor Beet!</h1>
      </div>
      <div className={styles.button} second>
        <CalendlyButton url='https://calendly.com/nelson-a-caudill/initial-meet' />
      </div>
    </Dual>      
  </Section>
)

export default Calendly