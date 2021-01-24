import React from 'react'

import styles from './priceCard.module.css'

const PriceCard = ({price, pricing, details}) => (
  <div className={styles.root}>
    <h2 className={styles.price}><span className={styles.sign}>&#36;</span>{price}</h2>
    <h4 className={styles.pricing}>{pricing}</h4>
    <p>{details}</p>
  </div>
)

export default PriceCard