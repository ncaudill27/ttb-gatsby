import React from "react"

import Section from "./section"
import BizpitchLogo from "./images/bizpitchLogo"

import styles from "./bizpitch.module.css"

const Bizpitch = () => (
  <Section>
    <div className={styles.wrapper}>
      <div className={styles.copy}>
        <h1>Dr. Caudill was a 2020 BizPitch Savannah finalist!</h1>
      </div>
      <BizpitchLogo
        className={styles.logo}
        alt="BizPitch logo. Reads: 2020 bizpitch finalist"
      />
    </div>
  </Section>
)

export default Bizpitch
