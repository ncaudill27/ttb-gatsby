import React from "react"

import Connection from "./images/pillarConnection"
import Eating from "./images/pillarEating"
import Physical from "./images/pillarPhysical"
import Sleep from "./images/pillarSleep"
import Stress from "./images/pillarStress"

import PillarIcon from "./pillarIcon"

import styles from "./pillarsGrid.module.css"

const pillars = [
  {
    text: "FOOD",
    color: "#97BF67",
    image: <Eating />,
    alt: "cute cartoon beet, smiley happy face, green background",
  },
  {
    text: "ACTIVITY",
    color: "#F9951D",
    image: <Physical />,
    alt:
      "cute cartoon beet, sweaty, happy, and wearing a headband, orange background",
  },
  {
    text: "SLEEP",
    color: "#387EC3",
    image: <Sleep />,
    alt: "cute cartoon beet, smiling and resting, blue background",
  },
  {
    text: "STRESS",
    color: "#E578CB",
    image: <Stress />,
    alt:
      "cute cartoon beet, stressed out and frowning, light fuschia background",
  },
  {
    text: "CONNECTION",
    color: "#CA6D50",
    image: <Connection />,
    alt: "cute cartoon beet, smiling with heart eyes, burnt orange background",
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
