import React from 'react'

import styles from './section.module.css'
import '../styles/custom-properties.css'

const Section = React.forwardRef( ({color, children, ...props}, ref) => {

  return (
    <section
      ref={ref}
      className={styles.section}
      style={{backgroundColor: `var(--${color})`}}
      {...props}
    >
      {children}
    </section>
  )
})

export default Section;