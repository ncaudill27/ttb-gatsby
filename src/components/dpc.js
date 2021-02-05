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
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.board}>
                <BoardIcon className={styles.icon} />
                <p>teaching how to cook healthy meals</p>
                <p>(with budget and timing in mind)</p>
              </div>
              <div className={styles.clock}>
                <ClockIcon className={styles.icon} />
                <p>
                  30 - 60min visits with the doctor
                </p>
              </div>
              <div className={styles.doctor}>
                <DoctorIcon className={styles.icon} />
                <p>
                  in-office visits
                </p>
              </div>
              <div className={styles.hoop}>
                <HoopIcon className={styles.icon} />
                <p>
                  sport physicals
                </p>
              </div>
              <div className={styles.house}>
                <HouseIcon className={styles.icon} />
                <p>
                  at home visits for new borns
                </p>
              </div>
              <div className={styles.phone}>
                <PhoneIcon className={styles.icon} />
                <p>
                  text, phone, telemedicine
                </p>
              </div>
              <div className={styles.syringe}>
                <SyringeIcon className={styles.icon} />
                <p>immunizations</p>
              </div>
              <div className={styles.timer}>
                <TimerIcon className={styles.icon} />
                <p>minimal or no wait times in waiting room</p>
              </div>
              <div className={styles.veggies}>
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