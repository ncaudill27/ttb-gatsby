import React from 'react'

import Section from './section'
import Testimonial from './testimonial'
import Arch from './images/testimonialsArch'

import styles from './testimonials.module.css'

const testimonials = [
  {
    name: 'Eva Gonzalez',
    testimonial: `Dr. Caudill saw all 8 of our children. What I liked most about her was that she listened to me as a parent. I am a no-nonsense type of parent, so she was always very respectful and understanding. All of my kids loved her, because she wasn't the one giving the shots. :) I would highly recommend Dr. Caudill.`
  },
  {
    name: 'Quentin & Karen English',
    testimonial: `Absolutely the best we could ever ask for in a doctor for my son. My family has been with Dr. Rivera-Caudill since the beginning (newborn) and we absolutely love her! She is family to us, not just our son’s doctor. She took care of him from birth in Miami when we used to live there and is now taking care of my son here in Georgia. 21 years together...and I wouldn’t have it any other way. Dr. Rivera-Caudill is an exceptional Pediatrician. She took care of our son with all his stomach issues, migraines, scoliosis, throughout the years. She spends quality time with all of her patients and follows up with calls at night, after hours, and when he had to see a specialist she called and made sure everything went well. I love the extra touch that she gives not just to us but to all of her patients. I don’t know what we would have done without Dr. Caudill. She explains everything on all of our visits. This is my last year with her, then our son has to go to a pcp doctor which is going to be hard for me. How many people can say they have had their same pediatrician with them their whole child life (childhood into adulthood) and that’s including moving from state to state and still made sure he stayed with Dr. Rivera-Caudill? I am blessed to be one!!`
  },
  {
    name: 'Maria Hernandez',
    testimonial: `Savannah’s children are so lucky to have Dr Caudill! She was my son’s pediatrician for many years in Miami. Dr. Caudill has a true passion for her profession. Patients love her for her warmth and funny ways. Parents love her for her knowledge, bedside manners, and experience.   She is an exceptional doctor and your kids will absolutely love her!`
  },
]

const Testimonials = () => (
  <Section color='pri-med' background>
    <h1>
      Family Testimonials
    </h1>
    <div className={styles.grid}>
      {testimonials.map( props => (
        <Testimonial key={props.name} {...props} />
      ))}
    </div>
  </Section>
)

export default Testimonials