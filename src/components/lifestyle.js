import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import Section from './section'
import Dual from './dual'

import MotherDaughter from './images/motherDaughter'

import styles from './lifestyle.module.css'

const Lifestyle = () => (
    <Section color='pri-med'>
      <Dual>
        <div className={styles.copy} first>
          <h1>
            A Lifestyle Medicine Approach
          </h1>
          <p>
            The Lifestyle Medicine approach is comprehensive, evidence-based and focuses on the root cause of the patient's problems.
            It involves counseling patients on their lifestyle choices and how to prevent chronic diseases.
          </p>
          <AnchorLink
            to='/learn-more#lifestyle'
            title='Learn more about Lifestyle Medicine'
            className={styles.anchor}
          />
        </div>
        <MotherDaughter className={styles.img} style={{borderRadius: '50%'}} second />
      </Dual>
    </Section>
)

export default Lifestyle