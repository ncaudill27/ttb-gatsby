import React from 'react'

import Section from './section'
import Dual from './dual'
import Calendly from './calendly'
import Atlas from './atlas'

const Join = () => (
  <Section color='sec-dark'>
    <Dual>
      <Calendly first />
      <Atlas second />
    </Dual>
  </Section>
)

export default Join