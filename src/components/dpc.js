import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Section from './section'
import Dual from './dual'
import Button from './button'

import styles from './dpc.module.css'

const DPCButton = () => <Button>Learn more about DPC</Button>

const DPC = () => {
  const breakpoints = useBreakpoint()
  
  return (
    <Section color='sec-light'>
      <Dual>
        <div first>
          <h1>
            Why DPC?
          </h1>
          <p>
            One of the things I’m most looking forward to in opening The Tiny Beet is spending more time with my patients.
            A DPC model, similar to a concierge style, allows for this tailored experience and works as a monthly membership.
            These are some of its advantages: 
          </p>
          { (breakpoints.md || breakpoints. l) && <DPCButton /> }
        </div>
        <div second>
          <div className={styles.grid}>
            
          </div>
          { breakpoints.sm && <DPCButton /> }
        </div>
      </Dual>
    </Section>
  )
}