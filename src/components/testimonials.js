import React from 'react'

import Section from './section'
import Testimonial from './testimonial'
import Arch from './images/testimonialsArch'

import styles from './testimonials.module.css'

const testimonials = [
  {
    name: 'Eva Gonzalez',
    testimonial: `
      Absolutely the best we could ever ask for in a doctor for my son. My family has been with Dr. Caudill since the beginning (newborn) and we absolutely love her! She is family to us, not just our son’s doctor.
    `
  },
  {
    name: 'Quentin & Karen English',
    testimonial: `
      Absolutely the best we could ever ask for in a doctor for my son. My family has been with Dr. Caudill since the beginning (newborn) and we absolutely love her! She is family to us, not just our son’s doctor. She took care of him from birth in Miami when we used to live there and is now taking care of my son here in Georgia. 21 years together and I wouldn’t have it any other way. 
    `
  },
  {
    name: 'Maria Hernandez',
    testimonial: `
      Dr. Caudill has a true passion for her profession. Patients love her for her warmth and funny ways. Parents love her for her knowledge, bedside manners, and experience. She is an exceptional doctor and your kids will absolutely love her!
    `
  },
]

const Testimonials = () => (
  <Section color='pri-med' background>
    <div className={styles.root}>
      <div className={styles.header}>
        <Arch className={styles.arch} />
        <h1 className={styles.title}>
          Family <br />
          Testimonials
        </h1>
      </div>
      <div className={styles.grid}>
        {testimonials.map( props => (
          <Testimonial key={props.name} {...props} />
        ))}
      </div>
    </div>
  </Section>
)

export default Testimonials