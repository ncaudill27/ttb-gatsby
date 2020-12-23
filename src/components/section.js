import React from 'react'

import styles from './section.module.css'
import '../styles/custom-properties.css'

const Section = React.forwardRef( ({className, color, children, ...props}, ref) => {

  color = {backgroundColor: `var(--${color})`}

  return (
    <section
      ref={ref}
      className={styles.section}
      style={color}
      {...props}
    >
      {children}
    </section>
  )
})

export default Section;