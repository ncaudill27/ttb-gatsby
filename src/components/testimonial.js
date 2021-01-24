import React, { useState, useEffect, useRef } from 'react'

import styles from './testimonial.module.css'
import '../styles/custom-properties.css'

const Testimonial = ({name, testimonial}) => {
  const testimonialEl = useRef()

  const [gridRowEnd, setGridRowEnd] = useState(`span 10`)

  useEffect(() => {
    if (!!testimonialEl) {
      const height = testimonialEl.current.getBoundingClientRect().height
      console.log(height);
      const rowEnd = Math.floor((height / 20 + 3))
      setGridRowEnd(`span ${rowEnd}`)
    }
  }, [testimonialEl]) //TODO add useWidth hook to dependencies

  // const color = `var(--${['beet', 'blueberry', 'carrot'][Math.floor(Math.random() * Math.floor(3))]})`

  return (
    <div className={styles.root} style={{gridRowEnd}}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.testimonial} ref={testimonialEl}>{testimonial}</p>
    </div>
  )
}

export default Testimonial