import React from 'react'

import Section from './section'
import Dual from './dual'
import PriceCard from './priceCard'

import styles from './pricing.module.css'

const prices = [
  {
    price: 120,
    pricing: 'Sprouts \n0-2 y/o',
    details: 'Blah blah blah'
  },
  {
    price: 30,
    pricing: 'Gonzalez Package',
    details: 'Blah blah blah'
  },
  {
    price: 50,
    pricing: 'Teenager Package',
    details: 'Blah blah blah'
  }
]

const Pricing = () => (
  <Section color='sec-light' id='pricing'>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Our <br/>
        memberships <br/>
        include:
      </h1>
      <div className={styles.lists}>
        <ul className={styles.list}>
          <li>Personal number to communicate with Dr. Caudill or scheduled Telemedicine.</li>
          <li>Lifestyle Medicine education</li>
          <li>Lactation support</li>
          <li>Same day or next day appointments</li>
          <li>30 minute blocked visits</li>
          <li>Minimal to no wait time in waiting room</li>
          <li>All well check up visits as per American Academy of Pediatrics (AAP)</li>
          <li>Immunizations as per AAP</li>
        </ul>
        <ul className={styles.list}>
          <li>Sick visits, same day or next, with appointment</li>
          <li>Discounted price on medications</li>
          <li>Most labs included</li>
          <li>Incision/drainage and simple sutures</li>
          <li>Chronic care management and coordinations</li>
          <li>Developmental screenings per age group</li>
          <li>Events and workshops at discounted rate</li>
        </ul>
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {prices.map(price => (
        <PriceCard key={price.price} {...price} />
      ))}
    </div>
  </Section>
)

export default Pricing