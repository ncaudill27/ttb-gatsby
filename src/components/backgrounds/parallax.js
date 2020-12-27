import React, { useRef } from 'react'
import useParallax from '../../hooks/useParallax'

import ChiaBackground from '../backgrounds/chia'

import styles from './parallax.module.css'

const ParallaxBackground = React.forwardRef( (props, ref) => (
  <div className={styles.content} ref={ref}>
    {props.children}
  </div>
))

function ParallaxContainer({children}) {
  const sectionEl = useRef(null)

  const backgroundStyle = useParallax(sectionEl)

  return (
    <section className={styles.container}>
        <ChiaBackground className={styles.background} style={backgroundStyle} />
        <ParallaxBackground ref={sectionEl}>
          {children}
        </ParallaxBackground>
    </section>
  )
}

export default ParallaxContainer