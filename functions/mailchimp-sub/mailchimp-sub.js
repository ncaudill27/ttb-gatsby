const fetch = require("node-fetch")
const crypto = require("crypto")
// const mailchimp = require('@mailchimp/mailchimp_marketing');

exports.handler = async function (event, context) {
  console.log("Event: \n", event) //! DELETE
  console.log("Context: \n", context) //! DELETE

  const { email, name } = JSON.parse(event.body)

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "You trying something funny, buster?" }),
    }
  }

  // used in requests required use of mailchimps email id
  // const emailHash = crypto.createHash('md5').update(email).digest('hex')

  //todo figure out why this isnt working
  //todo contact mailchimp
  // mailchimp.setConfig({
  //   apiKey: process.env.MAILCHIMP_API_KEY,
  //   server: 'https://us8.admin.mailchimp.com/'
  // })
  // const response = await mailchimp.ping.get();
  try {
    /* ------
      LIST GET REQUEST
    ------ */
    const getResponse = await fetch(
      "https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d/members",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    )

    if (!getResponse.ok) {
      // NOT res.status >= 200 && res.status < 300
      console.log("Get response error: ", getResponse)
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: "Oopsy! Seems our mailing service is down! Try again soon!",
        }),
      }
    }

    const getData = await getResponse.json()

    const memberEmails = getData.members.map(member => member.email_address)

    if (memberEmails.includes(email)) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: "Email already in list!" }),
      }
    }
    /* ----------
      POST MEMBER REQUEST
    ---------- */
    const postResponse = await fetch(
      "https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d/members/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name,
          },
        }),
      }
    )

    if (!postResponse.ok) {
      // NOT res.status >= 200 && res.status < 300
      console.log("Post response error: ", postResponse)
      return {
        statusCode: postResponse.status,
        body: JSON.stringify({
          error: "Oopsy! Seems our mailing service is down! Try again soon!",
        }),
      }
    }

    const subscription = await postResponse.json()
    console.log("Succesfull subscription: ", subscription)
    /* ----------
      DELETE SUB REQ
    ---------- */
    // const response = await fetch('https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d/members/' + emailHash, {
    //   method: 'DELETE',
    //   headers: {
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`
    //   }
    // })

    // const deleted = await response.json()
    // console.log(deleted)

    return {
      statusCode: 200,
      body: JSON.stringify({ data: "Thank you for subscribing!" }),
    }
  } catch (err) {
    console.log(err) //TODO implement logging for errors
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Oopsy! Seems our mailing service is down! Try again soon!",
      }),
    }
  }
}
