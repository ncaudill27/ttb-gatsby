import React from 'react'

import Section from './section'

import styles from './nonMembers.module.css'

const services = [
  {
    price: '150',
    service: 'Non-member sick visits',
    note: 'Per visit'
  },
  {
    price: '165',
    service: 'Non-member well check',
    note: 'Per visit'
  },
  {
    price: '100',
    service: 'Non-member sports physical'
  },
  {
    price: '100',
    service: 'Lifestyle Medicine consults, for those who want to maintain their pediatrician',
    note: 'Per month'
  },
  {
    price: '200',
    service: 'Home visits (restrictions apply)',
    note: 'Per visit'
  },
  {
    price: '50',
    service: 'Telemedicine',
    note: 'Per session'
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
      {services.map(({price, service, note}) => (
        <div key={service} className={styles.service}>
          <p className={styles.price}>&#36;{price}</p>
          <p className={styles.copy}>{service}</p>
          {note && <p className={styles.note}>{note}</p>}
        </div>
      ))}
    </div>
  </Section>
)

export default NonMembers