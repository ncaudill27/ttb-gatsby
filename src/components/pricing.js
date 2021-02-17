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
  <Section color='pri-med' id='pricing'>
    <Dual className={styles.dual}>
      <div className={styles.first} first>
        <h1 className={styles.title}>How the direct patient care Membership model works.</h1>
      </div>
      <div className={styles.second} second>
        <p className={styles.copy}>
          I know you may have many questions. Please take a look at our FAQ section or schedule an online meet and greet with me personally. 
        </p>
      </div>
    </Dual>
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
      {prices.map(price => (
        <PriceCard key={price.price} {...price} />
      ))}
    </div>
  </Section>
)

export default Pricing