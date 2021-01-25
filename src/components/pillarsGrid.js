import React from 'react'

import TextSpin from './textSpin'

import styles from './pillarsGrid.module.css'

const pillars = [
  {
    text: 'SLEEP',
    color: 'blue'
  },
  {
    text: 'FOOD',
    color: 'green'
  },
  {
    text: 'STRESS MANAGEMENT',
    color: '#e577cb'
  },
  {
    text: 'PHYSICAL ACTIVITY',
    color: 'orange'
  },
  {
    text: 'SUBSTANCE ABUSE',
    color: 'peachpuff'
  },
  {
    text: 'INTERPERSONAL COMMUNICATION',
    color: 'brown'
  },
]

const PillarsGrid = () => (
  <div className={styles.root}>
    {pillars.map(pillar => (
      <TextSpin {...pillar} />
    ))}
  </div>
)

export default PillarsGrid