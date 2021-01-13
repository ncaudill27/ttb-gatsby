import React, { useState } from 'react'

import Form from './form'
import Button from './button'

const SubscribeForm = (props) => {

  const [email, setEmail] = useState('')
  const handleChange = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();

    fetch('/.netlify/functions/mailchimp-sub'
      + '?email=' + email
    )
    // .then( res => res.msg )
    .then( msg => console.log(msg) )
    .catch( err => console.log(err) )
  }

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <h1>Subscribe</h1>
      <label htmlFor='email'>Email</label>
      <input id='email' value={email} onChange={handleChange} />
      <Button>Subscribe to our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm