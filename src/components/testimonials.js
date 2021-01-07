import React from 'react'

import Section from './section'
import Testimonial from './testimonial'
import styles from './testimonials.module.css'

const testimonials = [
  {
    name: 'Eva Gonzalez',
    years: 'X',
    testimonial: `
      "She's been amazing, incredible. Best doc ever. Patient for x years. Our 8 kids love her. "
    `
  },
  {
    name: 'Patient from Savannah',
    years: 'X',
    testimonial: `
      "Comfortable around her. So helpful, goes out of her way. Truly best experience."
    `
  },
  {
    name: 'Martha Roman',
    years: 'X',
    testimonial: `
      "Mejor doctora que hemos tenido. Una maravilla. La Dr. Caudill es una hermosura."
    `
  }
]

const Testimonials = () => (
  <Section color='pri-med'>
    <h1 className={styles.header}>Testimonials</h1>
    <div className={styles.testimonials}>
      {
        testimonials.map( props => <Testimonial key={props.name} {...props} /> )
      }
    </div>
  </Section>
)

export default Testimonials