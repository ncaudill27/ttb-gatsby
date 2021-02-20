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
    text: 'FOOD',
    color: '#97BF67',
    image: <Eating />
  },
  {
    text: 'ACTIVITY',
    color: '#F9951D',
    image: <Physical />
  },
  {
    text: 'SLEEP',
    color: '#387EC3',
    image: <Sleep />
  },
  {
    text: 'STRESS',
    color: '#E578CB',
    image: <Stress />
  },
  {
    text: 'CONNECTION',
    color: '#CA6D50',
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