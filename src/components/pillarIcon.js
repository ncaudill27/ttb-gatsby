import React from 'react'

import styles from './pillarIcon.module.css'

const PillarIcon = ({text, color, image}) => (
  <div className={styles.root}>
    <h4 className={styles.title}>{text}</h4>
    <div className={styles.img}>
      {image}
    </div>
  </div>
)

export default PillarIcon