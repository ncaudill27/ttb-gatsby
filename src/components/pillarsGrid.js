import React from 'react'

// import TextSpin from './textSpin'
import Abuse from './images/pillarAbuse'
import Connection from './images/pillarConnection'
import Eating from './images/pillarEating'
import Physical from './images/pillarPhysical'
import Sleep from './images/pillarSleep'
import Stress from './images/pillarStress'

import PillarIcon from './pillarIcon'

import styles from './pillarsGrid.module.css'

const pillars = [
  {
    text: 'SLEEP',
    color: 'blue',
    image: <Sleep />
  },
  {
    text: 'FOOD',
    color: 'green',
    image: <Eating />
  },
  {
    text: 'STRESS MANAGEMENT',
    color: '#e577cb',
    image: <Stress />
  },
  {
    text: 'PHYSICAL ACTIVITY',
    color: 'orange',
    image: <Physical />
  },
  {
    text: 'SUBSTANCE ABUSE',
    color: 'peachpuff',
    image: <Abuse />
  },
  {
    text: 'CONNECTION',
    color: 'brown',
    image: <Connection />
  },
]

const PillarsGrid = () => (
  <div className={styles.root}>
    {pillars.map(pillar => (
      // <TextSpin key={pillar.text} {...pillar} />
      <PillarIcon key={pillar.text} {...pillar} />
    ))}
  </div>
)

export default PillarsGrid