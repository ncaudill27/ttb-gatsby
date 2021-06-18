import React from "react"

import Section from "./section"
import Dual from "./dual"
import LinkList from "./lifestyleAboutLinkList"
import PillarsGrid from "./pillarsGrid"

import styles from "./lifestyleAbout.module.css"

const Lifestyle = () => {
  return (
    <Section id="lifestyle" color="pri-dark">
      <Dual className={styles.dual}>
        <div className={styles.copy} first>
          <h1>The Lifestyle Medicine Approach</h1>
          <p>
            Lifestyle Medicine is the specialty I came across that ultimately
            pushed me to open my own practice. LM treats each patient from the
            root cause by focusing on its pillars: eating healthy (we’re big
            fans of plant-based meals), having fun with physical activity, the
            importance of sleep, harvesting healthy relationships, stress
            management, and avoiding substances.
          </p>
          <h3 className={styles.subheader}>
            Below are some Lifestyle Medicine resources I highly recommend:
          </h3>
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
