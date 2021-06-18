import React from "react"

import Section from "./section"

import styles from "./office.module.css"

const OfficeInfo = () => (
  <Section color="sec-light">
    <div className={styles.wrapper}>
      <h1>Contact</h1>
      <h3>PHONE</h3>
      <div>
        <a className={styles.phone} href="tel:912-222-2222">
          (912) 222-2222
        </a>
      </div>
      <h3>EMAIL</h3>
      <p>thetinybeet@mailchimp.com</p>
      <h3>ADDRESS</h3>
      <p>
        51 Johnny Mercer Blvd.
        <br />
        Wilmington Island, GA 31400
      </p>
    </div>
  </Section>
)

export default OfficeInfo
