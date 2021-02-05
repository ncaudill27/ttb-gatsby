import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Section from './section'
import Dual from './dual'
import Grid from './dpcGrid'
import Button from './button'

import styles from './dpc.module.css'

const DPCButton = () => <Button>Learn more about DPC</Button>

const DPC = () => {
  const breakpoints = useBreakpoint()
  
  return (
    <Section color='pri-dark'>
      <Dual>
        <div first>
          <h1>
            The benefits of a DPC practice.
          </h1>
          <p>
            A DPC model, similar to concierge medicine, allows for a tailored experience with each individual patient and works as a monthly membership.
            One of the things I’m most looking forward to in opening The Tiny Beet is spending more time with my patients.
          </p>
          <p>
            Here are some of its advantages:
          </p>
          { !breakpoints.sm && <DPCButton /> }
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} second>
          <Grid />
          { breakpoints.sm && <DPCButton /> }
        </div>
      </Dual>
    </Section>
  )
}

export default DPC