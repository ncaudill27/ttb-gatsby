import React, { useState } from 'react'
import { postMailchimpSubscriber } from '../utils/requests'

import Form from './form'
import Button from './button'
import TextField from './textField'

import styles from './subscribeForm.module.css'

const SubscribeForm = (props) => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState('')

  const handleChange = e => setEmail(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true)
    const { data, error } = await postMailchimpSubscriber(email)
    setLoading(false)

    if (error) {
      return setResponse(error)
    }

    return setResponse(data)
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
          autofocus
        />
      </div>
      <div className={styles.response}>{response}</div>
      <Button disabled={loading}>Join our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm