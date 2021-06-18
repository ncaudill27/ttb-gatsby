import React from "react"

import styles from "./pillarIcon.module.css"

const PillarIcon = ({ text, color, image }) => (
  <div className={styles.root}>
    <div className={styles.img}>{image}</div>
    <span
      className={styles.label}
      style={{
        backgroundColor: color,
      }}
    >
      <h4 className={styles.title}>{text}</h4>
    </span>
  </div>
)

export default PillarIcon
