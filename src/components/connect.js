import React from 'react'

import Section from './section'
import Dual from './dual'
import CalendlyButton from './calendlyButton'

import styles from './connect.module.css'

const Connect = () => (
  <Section color='sec-dark'>
    <Dual>
      <div first>
        <h2 className={styles.ready}>READY TO BECOME A MEMBER?</h2>
        <h1>Schedule a meet &amp; with the Doctor Beet!</h1>
      </div>
      <div second>
        <CalendlyButton url='https://calendly.com/nelson-a-caudill/initial-meet' />
      </div>
    </Dual>      
  </Section>
)

export default Connect