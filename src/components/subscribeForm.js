import React, { useState } from 'react'
import { postMailchimpSubscriber } from '../utils/requests'
import { validateEmail, validateName } from '../utils/inputValidation'

import Form from './form'
import Button from './button'
import TextField from './textField'

import styles from './subscribeForm.module.css'

const SubscribeForm = (props) => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [response, setResponse] = useState([])

  const updateResponse = string => {
    setResponse(responses => [...responses, string])
  }
  const handleChange = setFn => e => {
    setFn(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const { valid } = await validateSubmission()
    console.log(valid)
    console.log(response)

    // setLoading(true)
    // const { data, error } = await postMailchimpSubscriber(email)
    // setLoading(false)

    // if (error) {
    //   setResponse('Oopsy! Something seems to have gone wrong! Try again!')
    //   throw new Error(error)
    // }

    // return setResponse(data)
  }

  const validateSubmission = async () => {
    let valid = true

    if (!name) updateResponse('First Name cannot be empty')
    if (!email) updateResponse('Email cannot be empty')
    
    if (!validateEmail(email)) updateResponse('Please enter a valid email')
    if (!validateName(name)) updateResponse('Please enter a valid first name')

    if (
      !name
      || !email
      || !validateName(name)
      || !validateEmail(email)
    ) valid = false
    
    return { valid }
  }

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <h1 className={styles.header}>Subscribe</h1>
      <div className={styles.inputs}>
        <TextField
          id='firstName'
          name={name}
          placeholder='Please enter your first name'
          handleChange={handleChange(setName)}
          disabled={loading}
          autoFocus
        />
        <TextField
          id='email'
          name={email}
          placeholder='Please enter your email'
          handleChange={handleChange(setEmail)}
          disabled={loading}
        />
      </div>
      {!!response.length &&
      <div className={styles.response}>
        {response.map(response => (
          <div>{response}</div>
        ))}
        </div>
      }
        
      <Button disabled={loading}>Join our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm