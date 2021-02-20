import React, { useState, useEffect, useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'

import styles from './testimonial.module.css'
import '../styles/custom-properties.css'

const Testimonial = ({name, testimonial}) => {
  const testimonialEl = useRef()
  const [, isResizing] = useWindowSize()

  const [gridRowEnd, setGridRowEnd] = useState(`span 10`)

  useEffect(() => {
      const height = testimonialEl.current.getBoundingClientRect().height
      const rowEnd = Math.floor((height / 20 + 3))
      setGridRowEnd(`span ${rowEnd}`)

      if (isResizing) setGridRowEnd(`span ${rowEnd}`)
  }, [isResizing])

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