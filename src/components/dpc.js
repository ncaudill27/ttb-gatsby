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

const DPCButton = () => <Button color='blueberry'>Learn more about DPC</Button>

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
              <div className={styles.item}>
                <BoardIcon className={styles.icon} />
                <p>teaching how to cook healthy meals</p>
                <p>(with budget and timing in mind)</p>
              </div>
              <div className={styles.item}>
                <ClockIcon className={styles.icon} />
                <p>
                  30min, blocked visits with the doctor &amp; minimal or no wait times
                </p>
              </div>
              <div className={styles.item}>
                <DoctorIcon className={styles.icon} />
                <p>
                  in-office visits
                </p>
              </div>
              <div className={styles.item}>
                <HoopIcon className={styles.icon} />
                <p>
                  sport physicals
                </p>
              </div>
              <div className={styles.item}>
                <HouseIcon className={styles.icon} />
                <p>
                  at home visits for new borns
                </p>
              </div>
              <div className={styles.item}>
                <PhoneIcon className={styles.icon} />
                <p>
                  text, phone, telemedicine
                </p>
              </div>
              <div className={styles.item}>
                <SyringeIcon className={styles.icon} />
                <p>immunizations</p>
              </div>
              <div className={styles.item}>
                <TimerIcon className={styles.icon} />
                <p>minimal of no wait times in waiting room</p>
              </div>
              <div className={styles.item}>
                <VeggiesIcon className={styles.icon} />
                <p>Lifestyle Medicine teachings for patients or consults</p>
              </div>
            </div>
          </div>
          { breakpoints.sm && <DPCButton /> }
        </div>
      </Dual>
    </Section>
  )
}

export default DPC