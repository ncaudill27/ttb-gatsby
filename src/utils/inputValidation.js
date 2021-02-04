const validateName = (name) => {
  const regex = new RegExp(/^[a-z ,.'-]+$/, 'i')
  return regex.test(name)
}

const validateEmail = (email) => {
  const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'i')
  return regex.test(email)
}

// update to array of Refs and map over allowing it to be more generic
const validateSubmission = async ({loggingFunc, name, email}) => {
  let [validName, validEmail] = [true, true]

  if (!name) loggingFunc('First Name cannot be empty')
  if (!email) loggingFunc('Email cannot be empty')
  
  if (!validateEmail(email)) loggingFunc('Please enter a valid email')
  if (!validateName(name)) loggingFunc('Please enter a valid first name')

  if (
    !name
    || !validateName(name)
  ) validName = false

  if(
    !email
    || !validateEmail(email)
  ) validEmail = false
  
  return { validName, validEmail }
}

export {
  validateSubmission
}