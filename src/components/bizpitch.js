import React from 'react'

import Section from './section'
import BizpitchLogo from './images/bizpitchLogo'

import styles from './bizpitch.module.css'

const Bizpitch = () => (
  <Section>
    <div className={styles.wrapper}>
      <div className={styles.copy}>
        <h1>Dr. Caudill was a 2020 BizPitch Savannah finalist!</h1>
        <a className={styles.link} href='https://www.youtube.com/watch?v=Lt5b6MbtumQ'>Check out her pitch by clicking here.</a>
      </div>
      <BizpitchLogo className={styles.logo} />
    </div>
  </Section>
)

export default Bizpitch