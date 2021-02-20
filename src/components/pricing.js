import React from 'react'

import Section from './section'
import PriceCard from './priceCard'

import styles from './pricing.module.css'

const prices = [
  {
    price: 120,
    pricing: 'Sprouts',
    ageRange: '0-2',
    details: 'Includes 3 home visits for the newborns: 1 to 2 days from hospital discharge (at 2 weeks of age and 1 month of age)'
  },
  {
    price: 80,
    pricing: 'Seedlings',
    ageRange: '2-5',
    details: ''
  },
  {
    price: 70,
    pricing: 'Lil\' Beets',
    ageRange: '6-18',
    details: 'Includes sports physicals'
  }
]

const Pricing = () => (
  <Section color='sec-light' id='pricing'>
      <div className={styles.wrapper} style={{marginBottom: '2rem'}}>
        <h1 className={styles.title}>
          Our <br/>
          memberships <br/>
          include:
        </h1>
        <div className={styles.lists}>
          <ul className={styles.list}>
            <li>Dr. Caudill’s direct number to communicate with</li>
            <li>Telemedicine</li>
            <li>Minimal to no wait time in waiting room</li>
            <li>Same or next day sick visits, with appointment</li>
            <li>30 minute blocked visits</li>
            <li>All well check up visits as per American Academy of Pediatrics guidelines</li>
          </ul>
          <ul className={styles.list}>
            <li>Discounted price on medications and labs</li>
            <li>Lactation support</li>
            <li>Incision/drainage and simple sutures</li>
            <li>Chronic care management and coordinations</li>
            <li>Lifestyle Medicine education</li>
            <li>Developmental screenings per age group</li>
            <li>Events and workshops at discounted rate</li>
          </ul>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.tiers}>
            Monthly <br/>
            Membership <br/>
            Tiers:
          </h1>
          <p>Discounts available for 3 or more children</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {prices.map(price => (
            <PriceCard key={price.price} {...price} />
          ))}
        </div>
      </div>
  </Section>
)

export default Pricing