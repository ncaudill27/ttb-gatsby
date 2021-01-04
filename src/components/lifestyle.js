import React from 'react'

import Section from './section'
import Dual from './dual'
import Button from './button'

import Watergirl from './images/watergirl'

import styles from './lifestyle.module.css'

const Lifestyle = () => (
    <Section color='pri-dark'>
      <Dual>
        <div className={styles.copy} second>
          <h1>Why Lifestyle Medicine?</h1>
          <p>
            The Lifestyle Medicine approach is comprehensive, evidence-based and focuses on the root cause of the patient's health.
            It involves counseling patients on their lifestyle choices and how to prevent chronic diseases.
          </p>
          <Button>Learn more about Lifestyle Medicine</Button>
        </div>
        <Watergirl className={styles.img} first />
      </Dual>
    </Section>
)

export default Lifestyle