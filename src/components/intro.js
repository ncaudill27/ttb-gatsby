import React from 'react'

import Section from './section'
import MainLogo from './images/mainLogo'

import styles from './intro.module.css'

const Intro = () => (
  <Section color='pri-light' className={styles.root}>
    <MainLogo className={styles.img} />
    <div className={styles.copy}>
      <h1 className={styles.title}>
        Welcome to The Tiny Beet, we are here to inspire families of Savannah to live healthier lifestyles.
      </h1>
      <p>
        Dr. Caudill is on a mission to help her patients develop and maintain healthier lifestyles through general pediatrics and lifestyle medicine.
        The Tiny Beet is a direct patient care practice.
      </p>
    </div>
  </Section>
)

export default Intro