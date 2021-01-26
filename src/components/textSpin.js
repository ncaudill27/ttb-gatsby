import React from 'react'

import styles from './textSpin.module.css'

const TextSpin = ({color, text}) => (
  <svg viewBox="0 0 36 36" style={{backgroundColor: color}}>
    <path
      d="M18 5.3675
        a 12.7327 12.7327 0 0 1 0 25.465
        a 12.7327 12.7327 0 0 1 0 -25.465"
      fill='transparent'
      id="circle"
    />
    <text className={styles.text}>
      <textPath xlinkHref='#circle'>
        {text}
      </textPath>
    </text>
  </svg>
)

export default TextSpin