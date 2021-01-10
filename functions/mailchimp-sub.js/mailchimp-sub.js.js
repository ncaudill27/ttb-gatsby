const fetch = require('node-fetch');
// const crypto = require('crypto');
// const mailchimp = require('@mailchimp/mailchimp_marketing');

exports.handler = async function(event, context) {

  console.log('Event: \n', event) //! DELETE
  console.log('Context: \n', context) //! DELETE

  const email = event.queryStringParameters.email;

  if (!email) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'You trying something funny, buster?' }),
    }
  }

  // used in requests required use of mailchimps email id
  // const emailHash = crypto.createHash('md5').update(email).digest('hex');

  //todo figure out why this isnt working
  //todo contact mailchimp
  // mailchimp.setConfig({
  //   apiKey: process.env.REACT_APP_MAILCHIMP_KEY,
  //   server: 'https://us8.admin.mailchimp.com/'
  // })
  // const response = await mailchimp.ping.get();
  try {
    const response = await fetch('https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d/members/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_MAILCHIMP_KEY}`
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {}
      })
    })

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response }
    }

    const subscription = await response.json();    
    console.log(subscription);
    /* ------
      LIST GET REQUEST
    ------ */
    // const response = await fetch('https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d', {
    //   headers: {
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${process.env.REACT_APP_MAILCHIMP_KEY}`
    //   },
    // })
    
    // const data = await response.json()
    // console.log(data);
    /* ----------
      DELETE SUB REQ
    ---------- */
    // const response = await fetch('https://us8.api.mailchimp.com/3.0/lists/8e838bbe5d/members/' + emailHash, {
    //   method: 'DELETE',
    //   headers: {
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${process.env.REACT_APP_MAILCHIMP_KEY}`
    //   }
    // })

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Thank you for subscribing' }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
