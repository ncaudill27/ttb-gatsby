import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Section from "./section"
import Dual from "./dual"

import MotherDaughter from "./images/motherDaughter"

import styles from "./lifestyle.module.css"

const Lifestyle = () => (
  <Section color="pri-med" background>
    <Dual>
      <div className={styles.copy} first>
        <h1>A Lifestyle Medicine Approach</h1>
        <p>
          The Lifestyle Medicine approach is comprehensive, evidence-based, and
          focuses on the root cause of the patient's health. It involves
          counseling patients on their lifestyle choices like healthy eating,
          getting a good night’s sleep, the importance of physical activity and
          maintaining healthy relationships. All with the goal of preventing
          chronic diseases in your kids’ future...and having a bit of fun along
          the way.
        </p>
        <AnchorLink
          to="/learn-more#lifestyle"
          title="Learn more about Lifestyle Medicine"
          className={styles.anchor}
        />
      </div>
      <MotherDaughter
        alt="A mother standing behind her daughter and helping you prepare dinner."
        className={styles.img}
        style={{ borderRadius: "50%" }}
        second
      />
    </Dual>
  </Section>
)

export default Lifestyle
