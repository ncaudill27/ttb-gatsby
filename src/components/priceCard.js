import React from "react"

import styles from "./priceCard.module.css"

const PriceCard = ({ price, ageRange, pricing, details }) => (
  <div className={styles.root}>
    <h3 className={styles.pricing}>{pricing}</h3>
    <p className={styles.age}>{ageRange} years</p>
    <h2 className={styles.price}>
      <span className={styles.sign}>&#36;</span>
      {price}
    </h2>
    <p className={styles.details}>{details}</p>
  </div>
)

export default PriceCard
