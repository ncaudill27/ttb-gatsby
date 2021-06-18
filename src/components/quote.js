import React from "react"
import PropTypes from "prop-types"

import ParallaxBackground from "./backgrounds/parallax"

import styles from "./quote.module.css"

function Quote({ quote, by, color }) {
  return (
    <ParallaxBackground color={color}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.quote}>"{quote}"</h3>
          <p className={styles.by}> &mdash;{by}</p>
        </div>
      </div>
    </ParallaxBackground>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Quote.defaultProps = {
  color: "sec-dark",
}

export default Quote
