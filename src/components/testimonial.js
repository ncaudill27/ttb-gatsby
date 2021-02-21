import React, { useState, useEffect, useRef } from 'react'

import styles from './testimonial.module.css'
import '../styles/custom-properties.css'

const Testimonial = ({name, testimonial}) => {
  const testimonialEl = useRef()

  const [gridRowEnd, setGridRowEnd] = useState(`span 10`)
  const [width, setWidth] = useState(0)

  useEffect(() => {
      const height = testimonialEl.current.getBoundingClientRect().height
      const width = testimonialEl.current.getBoundingClientRect().width
      const rowEnd = Math.floor((height / 20 + 3))
      setGridRowEnd(`span ${rowEnd}`)
      setWidth(width)
  }, [width])

  // generate random color for name
  const color = `var(--${['beet', 'blueberry', 'carrot'][Math.floor(Math.random() * Math.floor(3))]})`

  return (
    <div className={styles.root} style={{gridRowEnd}}>
      <h3 className={styles.name} style={{color}}>{name}</h3>
      <p className={styles.testimonial} ref={testimonialEl}>{testimonial}</p>
    </div>
  )
}

export default Testimonial