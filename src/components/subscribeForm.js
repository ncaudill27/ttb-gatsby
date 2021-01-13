import React, { useState } from 'react'

import Form from './form'
import Button from './button'
import TextField from './textField'

const SubscribeForm = (props) => {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')

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
      <h1>Subscribe</h1>
      <TextField
        id='email'
        name={email}
        placeholder='Please enter your email'
        handleChange={handleChange}
      />
      {/* <TextField
        id='firstName'
        name={firstName}
        placeholder='Please enter your first name'
        handleChange={handleChange}
      /> */}
      <Button>Subscribe to our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm