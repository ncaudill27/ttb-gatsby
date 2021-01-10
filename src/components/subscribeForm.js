import React, { useState } from 'react'

import Form from './form'
import Button from './button'

const SubscribeForm = (props) => {

  const [email, setEmail] = useState('')
  const handleChange = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email)
    // fetch('/.netlify/functions/mailchimp-sub'
    //   + '?email=' + email
    // )
    // .then( res => res.json() )
    // .then( data => console.log(data.msg) )
    // .catch( err => console.log(err.msg) )
  }

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <h1>Subscribe</h1>
      <label>Email</label>
      <input value={email} onChange={handleChange} />
      <Button>Subscribe to our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm