import React, { useState } from "react"

import Section from "./section"
import Dual from "./dual"
import SubscribeForm from "./subscribeForm"
import Button from "./button"

import styles from "./newsletter.module.css"

const Newsletter = () => {
  const [showForm, setShowForm] = useState(false)
  const openForm = () => setShowForm(true)
  const closeForm = () => setShowForm(false)

  return (
    <Section color="pri-dark" background>
      <div className={styles.wrapper}>
        <Dual>
          <div first>
            <h1>Keep yourself in the loop</h1>
            <p>
              Stay up to date on all of The Tiny Beet updates, news, and
              seminars.
            </p>
          </div>
          <div className={styles.center} second>
            <Button onClick={openForm}>Subscribe</Button>
          </div>
        </Dual>
        <SubscribeForm showForm={showForm} closeForm={closeForm} openForm={openForm} />
      </div>
    </Section>
  )
}

export default Newsletter
