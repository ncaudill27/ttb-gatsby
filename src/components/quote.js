import React from 'react'
import PropTypes from 'prop-types'

import ParallaxBackground from './backgrounds/parallax'

import styles from './quote.module.css'

function Quote({quote, by}) {

  
  return (
    <ParallaxBackground>
      <div className={styles.quote}>
        <div className={styles.wrapper}>
          <blockquote>{quote}</blockquote>
          <p className={styles.by}> - {by}</p>
        </div>
      </div>
    </ParallaxBackground>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired
}

export default Quote