import React from 'react'

import Section from './section'

import BeetIcon from './images/beet'

import styles from './values.module.css'

const Values = () => (
    <Section color='sec-light' background>
      <h1 className={styles.title}>Core Values</h1>
      <div className={styles.flex}>
        <div className={styles.item}>
          <BeetIcon className={styles.icon} />
          <div className={styles.copy}>
            <h3>HEALTY EATING</h3>
            <p>Enabling our patients to make better meal decisions</p>
          </div>
        </div>
        <div className={styles.item}>
          <BeetIcon className={styles.icon} />
          <div className={styles.copy}>
            <h3>ACTIVE LIVING</h3>
            <p>Guide patients on ways to get up and get moving</p>
          </div>
        </div>
        <div className={styles.item}>
          <BeetIcon className={styles.icon} />
          <div className={styles.copy}>
            <h3>PROMOTING MINDFULNESS</h3>
            <p>Empower our patients and their families to grow into their best selves</p>
          </div>
        </div>
      </div>
    </Section>
)

export default Values