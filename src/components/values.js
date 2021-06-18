import React from "react"

import Section from "./section"
import IconCopy from "./iconCopy"

import styles from "./values.module.css"

const Values = () => (
  <Section color="sec-light" background>
    <h1 className={styles.title}>Core Values</h1>
    <div className={styles.flex}>
      <IconCopy
        header="HEALTY EATING"
        description="Enabling our patients to make better meal decisions"
      />
      <IconCopy
        header="ACTIVE LIVING"
        description="Guide patients on ways to get up and get moving"
      />
      <IconCopy
        header="PROMOTING MINDFULNESS"
        description="Empower our patients and their families to grow into their best selves"
      />
    </div>
  </Section>
)

export default Values
