import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import Section from './section'
import Dual from './dual'
import Button from './button'

import BoardIcon from './images/iconBoard'
import ClockIcon from './images/iconClock'
import DoctorIcon from './images/iconDoctor'
import HoopIcon from './images/iconHoop'
import HouseIcon from './images/iconHouse'
import PhoneIcon from './images/iconPhone'
import SyringeIcon from './images/iconSyringe'
import TimerIcon from './images/iconTimer'
import VeggiesIcon from './images/iconVeggies'

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
          { !breakpoints.sm && <DPCButton /> }
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}} second>
          <div className={styles.container}>
            <div className={styles.grid}>
              <BoardIcon />
              <ClockIcon />
              <DoctorIcon />
              <HoopIcon />
              <HouseIcon />
              <PhoneIcon />
              <SyringeIcon />
              <TimerIcon />
              <VeggiesIcon />
            </div>
          </div>
          { breakpoints.sm && <DPCButton /> }
        </div>
      </Dual>
    </Section>
  )
}

export default DPC