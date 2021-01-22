import React, { useState } from 'react'

import Form from './form'
import Button from './button'
import TextField from './textField'

import styles from './subscribeForm.module.css'

const SubscribeForm = (props) => {

  const [email, setEmail] = useState('')

  const handleChange = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/.netlify/functions/mailchimp-sub'
      + '?email=' + email, {
        method: 'POST'
      }
    )
    .then( res => res.json() )
    .then( data => console.log(data) )
    .catch( err => console.log(err) )
  }

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <h1 className={styles.header}>Subscribe</h1>
      <div className={styles.inputs}>
        <TextField
          id='email'
          name={email}
          placeholder='Please enter your email'
          handleChange={handleChange}
        />
      </div>
      <Button>Subscribe to our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm