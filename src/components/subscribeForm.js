import React, { useState } from "react"
import classNames from "classnames"
import { postMailchimpSubscriber } from "../utils/requests"
import { validateSubmission } from "../utils/inputValidation"
import { handleEscKey } from "../utils/handlers"

import Button from "./button"
import TextField from "./textField"

import styles from "./subscribeForm.module.css"

const SubscribeForm = props => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  const [response, setResponse] = useState([])
  // const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const resetState = () => {
    setLoading(false)
    setEmail("")
    // setName("")
    setResponse([])
    // setNameError(false)
    setEmailError(false)
    setServerError(false)
  }

  const updateResponse = string => {
    setResponse(responses => [...responses, string])
  }
  const handleChange = (setFn) => e => {
    setFn(e.target.value)
  }

  const handleSubmit = async e => {

    if (!!honeypot) return
    
    e.preventDefault()
    // clear any current responses
    setResponse([])
    // call validation function to check inputs and log any discrepancies
    const { validEmail } = await validateSubmission({
      loggingFunc: updateResponse,
      // name,
      email,
    })
    // update styling if errors
    // if (!validName) setNameError(true)
    if (!validEmail) setEmailError(true)
    // block from sending request to mailchimp if not validated
    if (!validEmail) return

    setLoading(true)
    const { error } = await postMailchimpSubscriber(email)
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
    emailError || serverError
      ? classNames(styles.response, styles.error)
      : styles.response

  return (
    <form onSubmit={handleSubmit} resetForm={resetState} {...props} className={styles.root}>
      <div className={responseStyles}>
        {response.map(response => (
          <div key={response}>{response}</div>
        ))}
      </div>
      <div className={styles.inputs}>
        <div style={{display: 'none'}}>
          <label htmlFor='name'>Name</label>
          <input id='name' value={honeypot} onChange={handleChange(setHoneypot)} />
        </div>
        <TextField
          id="email"
          value={email}
          placeholder="Please enter your email"
          onChange={handleChange(setEmail)}
          disabled={loading}
          error={emailError}
        />
      </div>
      <Button disabled={loading} onKeyDown={handleEscKey(props.closeForm)}>
        Join
      </Button>
    </form>
  )
}

export default SubscribeForm
