import React from 'react'
import PropTypes from 'prop-types'

import CirclesBackground from './backgrounds/circles'

import styles from './section.module.css'
import '../styles/custom-properties.css'

const Section = React.forwardRef((
    {
      background, 
      className,
      children,
      color,
      ...props
    },
    ref
  ) => {


  if (!background) {
  
    color = {backgroundColor: `var(--${color})`}

    return (
      <section
        ref={ref}
        className={className || styles.section}
        style={color}
        {...props}
      >
        {children}
      </section>
    )

  } else {

    return (
      <CirclesBackground
        className={className}
        color={color}
        {...props}
      >
        {children}
      </CirclesBackground>
    )
  }
})

Section.propTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  color: PropTypes.string
}

export default Section;