import React from 'react'

import Section from './section'
import Dual from './dual'
import TextSpin from './textSpin'
import { Link } from 'gatsby'

import styles from './lifestyleAbout.module.css'

const pillars = [
  {
    text: 'SLEEP',
    color: 'blue'
  },
  {
    text: 'FOOD',
    color: 'green'
  },
  {
    text: 'STRESS MANAGEMENT',
    color: '#e577cb'
  },
  {
    text: 'PHYSICAL ACTIVITY',
    color: 'orange'
  },
  {
    text: 'SUBSTANCE ABUSE',
    color: 'peachpuff'
  },
  {
    text: 'INTERPERSONAL COMMUNICATION',
    color: 'brown'
  },
]

const Lifestyle = () => {

  return (
    <Section>
      <Dual className={styles.dual}>
        <div first>
          <h1>The Lifestyle Medicine Approach</h1>
          <p>
            Lifestyle Medicine is the specialty I came across that ultimately pushed me to open my own practice.
            Using evidence-based medicine, LM treats each patient from the root cause.
            We will focus on the 6 pillars of LM together (listed in the circles) and help you develop healthier lifestyle decisions to prevent any chronic illness in your future.
          </p>
          <h3 className={styles.subheader}>Helpful resources on Lifestyle Medicine:</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link}>
                Link to an article
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>
                Link to an article
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>
                Link to an article
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link}>
                Link to an article
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.wrapper} second>
          <div className={styles.grid}>
            {pillars.map(pillar => (
              <TextSpin {...pillar} />
            ))}
          </div>
        </div>
      </Dual>
    </Section>
  )
}

export default Lifestyle