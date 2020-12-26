import React from 'react'

import Section from './section'
import Dual from './dual';
import MomImage from './images/momImage'

const Bio = () => (
  <Section color='pri-dark'>
      <Dual section>
        <div first>
          <h1>For those who don’t know me, I’m Dr. Yolanda Rivera-Caudill</h1>
          <p>Double board certified in American Academy of Pediatrics and Lifestyle Medicine. I’ve been practicing medicine for 32 years, having started in Miami then landing in Savannah—my home for the last 12 years.</p>
          <p>I love making conversation with kids and seeing what comes out of their inquisitive minds. With the opening of my own practice, The Tiny Beet, I’ll be able to provide a more personalized approach to each patient and their families. Scroll on to read more on how we’ll make that possible / we’re structuring The Tiny Beet to make that happen.</p>
        </div>
        <div second>
          <MomImage />
        </div>
      </Dual>
    </Section>
)

export default Bio