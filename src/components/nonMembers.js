import React from 'react'

import Section from './section'

import styles from './nonMembers.module.css'

const services = [
  {
    price: '150',
    service: 'Non-member sick visits'
  },
  {
    price: '165',
    service: 'Non-member well check'
  },
  {
    price: '100',
    service: 'Non-member sports physical'
  },
  {
    price: '100',
    service: 'Lifestyle Medicine coinsults, for those who want to maintain their pediatrician'
  },
  {
    price: '200',
    service: 'Home visits (restrictions apply)'
  },
  {
    price: '50',
    service: 'Telemedicine'
  },
  {
    price: '80',
    service: 'Dietician consult'
  },
  {
    price: '100',
    service: 'Ear piercings; medical grade titanium earrings or plastic earrings for kids with sensitive skin or allergies to jewelry'
  },
]

const NonMembers = () => (
  <Section color='sec-dark' className={styles.root}>
    <h1>Non-member services</h1>
    <div className={styles.services}>
      {services.map(({price, service}) => (
        <div className={styles.service}>
          <p className={styles.price}>&#36;{price}</p>
          <p className={styles.copy}>{service}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default NonMembers