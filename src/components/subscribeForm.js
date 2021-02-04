import React, { useState } from 'react'
import classNames from 'classnames'
import { postMailchimpSubscriber } from '../utils/requests'
import { validateSubmission } from '../utils/inputValidation'

import Form from './form'
import Button from './button'
import TextField from './textField'

import styles from './subscribeForm.module.css'

const SubscribeForm = (props) => {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [response, setResponse] = useState([])
  const [nameError , setNameError] = useState(false)
  const [emailError , setEmailError] = useState(false)

  const clearNameError = () => {
    if (nameError) setNameError(false)
  }
  const clearEmailError = () => {
    if (emailError) setEmailError(false)
  }

  const updateResponse = string => {
    setResponse(responses => [...responses, string])
  }
  const handleChange = (setFn, clearErrorFn) => e => {
    setFn(e.target.value)
    clearErrorFn()
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setResponse([])

    const { validName, validEmail } = await validateSubmission({
        loggingFunc: updateResponse,
        name,
        email
      })
    
    if (!validName) setNameError(true)
    if (!validEmail) setEmailError(true)

    setLoading(true)
    const { data, error } = await postMailchimpSubscriber(email)
    setLoading(false)

    if (error) {
      setResponse('Oopsy! Something seems to have gone wrong! Try again!')
      throw new Error(error)
    }

    return setResponse(data)
  }

  const responseStyles = nameError || emailError ? classNames(styles.response, styles.error) : styles.response

  return (
    <Form onSubmit={handleSubmit} {...props}>
      <h1 className={styles.header}>Subscribe</h1>
      <div className={styles.inputs}>
        <TextField
          id='firstName'
          name={name}
          placeholder='Please enter your first name'
          handleChange={handleChange(setName, clearNameError)}
          disabled={loading}
          error={nameError}
          autoFocus
        />
        <TextField
          id='email'
          name={email}
          placeholder='Please enter your email'
          handleChange={handleChange(setEmail, clearEmailError)}
          disabled={loading}
          error={emailError}
        />
      </div>
      {!!response.length &&
        <div className={responseStyles}>
          {response.map(response => (
            <div>{response}</div>
          ))}
        </div>}
      <Button disabled={loading}>Join our newsletter</Button>
    </Form>
  )
}

export default SubscribeForm