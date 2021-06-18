export const postMailchimpSubscriber = async (email, name) => {
  const response = await fetch("/.netlify/functions/mailchimp-sub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name }),
  })

  const { data, error } = await response.json()

  if (error) console.error(error)

  return { data, error }
}
