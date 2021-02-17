import React, { useRef } from 'react'
import useParallax from '../../hooks/useParallax'

import ChiaBackground from '../backgrounds/chia'

import styles from './parallax.module.css'

const ParallaxBackground = React.forwardRef( (props, ref) => (
  <div className={styles.content} ref={ref} style={{zIndex: 2}}>
    {props.children}
  </div>
))

function ParallaxContainer({children, color}) {
  const sectionEl = useRef(null)

  const backgroundStyle = useParallax(sectionEl, color)

  return (
    <section className={styles.container}>
        <ChiaBackground className={styles.background} style={backgroundStyle} />
        <ParallaxBackground ref={sectionEl} color={color}>
          {children}
        </ParallaxBackground>
    </section>
  )
}

ParallaxContainer.defaultProps = {
  color: 'sec-light'
}

export default ParallaxContainer