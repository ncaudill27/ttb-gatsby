import React from 'react'

import Section from './section'
import Dual from './dual'
import LinkList from './lifestyleAboutLinkList'
import PillarsGrid from './pillarsGrid'

import styles from './lifestyleAbout.module.css'

const Lifestyle = () => {

  return (
    <Section id='lifestyle'>
      <Dual className={styles.dual}>
        <div className={styles.copy} first>
          <h1>The Lifestyle Medicine Approach</h1>
          <p>
            Lifestyle Medicine is the specialty I came across that ultimately pushed me to open my own practice.
            Using evidence-based medicine, LM treats each patient from the root cause.
            We will focus on the 6 pillars of LM together (listed in the circles) and help you develop healthier lifestyle decisions to prevent any chronic illness in your future.
          </p>
          <h3 className={styles.subheader}>Helpful resources on Lifestyle Medicine:</h3>
          <LinkList />
        </div>
        <div className={styles.grid} second>
          <PillarsGrid />
        </div>
      </Dual>
    </Section>
  )
}

export default Lifestyle