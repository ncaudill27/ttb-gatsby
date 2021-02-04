const validateName = (name) => {
  const regex = new RegExp(/^[a-z ,.'-]+$/, 'i')
  return regex.test(name)
}

const validateEmail = (email) => {
  const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'i')
  return regex.test(email)
}

export {
  validateEmail,
  validateName
}