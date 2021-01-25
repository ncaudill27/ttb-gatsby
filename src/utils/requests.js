const postMailchimpSubscriber = async (email) => {
  
  const response = await fetch(
    '/.netlify/functions/mailchimp-sub'
    + '?email=' + email, {
    method: 'POST'
  })

  const { data, error } = await response.json()

  if (error) console.error(error)

  return { data, error }
}

export {
  postMailchimpSubscriber
}