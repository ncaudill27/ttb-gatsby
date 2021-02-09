import React from 'react'
import Color from 'color'

import styles from './pillarIcon.module.css'

const PillarIcon = ({text, color, image}) => (
  <div className={styles.root}>
    <h4
      className={styles.title}
      style={{
        backgroundColor: Color(color).alpha(0.95)
      }}
    >
      {text}
    </h4>
    <div className={styles.img}>
      {image}
    </div>
  </div>
)

export default PillarIcon