import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { postMailchimpSubscriber } from '../utils/requests'
import { validateSubmission } from '../utils/inputValidation'

import Form from './form'
import Button from './button'
import TextField from './textField'

import styles from './subscribeForm.module.css'

const SubscribeForm = (props) => {
  const firstInputEl = useRef()

  useEffect(() => {
    if (props.showForm) {
      firstInputEl.current.focus()
    }
  }, [props.showForm])
  
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [response, setResponse] = useState([])
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serverError, setServerError] = useState(false)

  const resetState = () => {
    setLoading(false)
    setEmail('')
    setName('')
    setResponse([])
    setNameError(false)
    setEmailError(false)
    setServerError(false)
  }
  
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

  const handleEscKeyClose = e => {
    if (e.key !== 'Escape') {
      return
    } else {
      props.toggleForm()
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    // clear any current responses
    setResponse([])
    // call validation function to check inputs and log any discrepancies
    const { validName, validEmail } = await validateSubmission({
        loggingFunc: updateResponse,
        name,
        email
      })
    // update styling if errors
    if (!validName) setNameError(true)
    if (!validEmail) setEmailError(true)
    // block from sending request to mailchimp if not validated
    if (!validName || !validEmail) return 

    setLoading(true)
    const { error } = await postMailchimpSubscriber(email, name)
    setLoading(false)

    if (error) {
      updateResponse(error)
      setServerError(true)
      return // kick out response
    }

    updateResponse("You're all signed up! Thank you!")
    //? anything useful we can do with the return data
    //? possibly log is somewhere
  }

  const responseStyles =
    nameError
    || emailError
    || serverError
      ? classNames(styles.response, styles.error)
      : styles.response

  if (!props.showForm) return null
  return (
    <Form
      onSubmit={handleSubmit}
      resetForm={resetState}
      {...props}
    >
      <h1 className={styles.header}>Subscribe</h1>
      <div className={styles.inputs}>
        <TextField
        id='firstName'
        ref={firstInputEl}
        name={name}
        placeholder='Please enter your first name'
        handleChange={handleChange(setName, clearNameError)}
        onKeyDown={handleEscKeyClose}
        disabled={loading}
        error={nameError}
      />
      <TextField
        id='email'
        name={email}
        placeholder='Please enter your email'
        handleChange={handleChange(setEmail, clearEmailError)}
        onKeyDown={handleEscKeyClose}
        disabled={loading}
        error={emailError}
      />
    </div>
      {!!response.length &&
        <div className={responseStyles}>
          {response.map(response => (
            <div key={response}>{response}</div>
          ))}
      </div>}
      <Button
        disabled={loading}
        onKeyDown={handleEscKeyClose}
      >
        Join our newsletter
    </Button>
    </Form>
  )
}

export default SubscribeForm