import React from 'react'

import styles from './testimonial.module.css'

const Testimonial = ({name, years, testimonial}) => (
  <div className={styles.container}>
    <div className={styles.image}></div>
    <h3 className={styles.name}>{name}</h3>
    <p className={styles.years}>PATIENT FOR {years} YEARS</p>
    <p className={styles.testimonial}>{testimonial}</p>
  </div>
)

export default Testimonial