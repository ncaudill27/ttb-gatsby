import React, { useState } from 'react'

import Section from './section'
import IconCopy from './iconCopy'
import SubscribeForm from './subscribeForm'
import Button from './button'

import styles from './newsletter.module.css'

const Newsletter = () => {
  const sectionEl = React.useRef()

  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => setShowForm( prev => !prev )

 return (
  <Section ref={sectionEl} color='pri-dark' background>
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
      <Button onClick={toggleForm}>Subscribe</Button>
      <SubscribeForm sectionEl={sectionEl} showForm={showForm} toggleForm={toggleForm} />
    </div>
  </Section>
 )
}

export default Newsletter