import React from 'react'

import Section from './section'
import IconCopy from './iconCopy'

import styles from './newsletter.module.css'
import Button from './button'

const Newsletter = () => (
  <Section color='pri-dark' background>
    <div className={styles.wrapper}>
      <h1>Want to sign-up for our newsletter?</h1>
      <div className={styles.icons}>
        <IconCopy
          header='Recipes'
          description='Receive the tastiest veggies recipes'
        />
        <IconCopy
          header='Exercises'
          description='Wow! Super fit excersize stuff right in your inbox!'
        />
        <IconCopy
          header='Address'
          description="This is the address again because i'm out of fake content! 123 Address, Wilmington Island, GA"
        />
      </div>
      <Button>Subscribe</Button>
    </div>
  </Section>
)

export default Newsletter