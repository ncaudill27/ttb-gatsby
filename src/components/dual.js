import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import useWindowSize from '../hooks/useWindowSize'
import classNames from 'classnames'

import styles from './dual.module.css'

const Dual = ({className, children, ...props}) => {
  const breakpoints = useBreakpoint()
  const width = useWindowSize()

  const dualEl = useRef(null)
  const [height, setHeight] = useState()
  const [sectionWidth, setSectionWidth] = useState()

  useEffect(() => {
      const elHeight = dualEl.current.getBoundingClientRect().height
      const elWidth = dualEl.current.getBoundingClientRect().width
      setHeight(elHeight)
      setSectionWidth(elWidth)

      if (sectionWidth !== elWidth) setHeight(elHeight)
  }, [dualEl, width, sectionWidth])

  const updatedChildren = () => React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.props.first) {
        return React.cloneElement(
          child, {
             className: classNames(child.props.className, styles.first),
             style: breakpoints.sm ? {...child.props.style} : {...child.props.style, height: height}
          }
        )
      }
      else if (child.props.second) {
        return React.cloneElement(
          child, {
             className: classNames(child.props.className, styles.second),
             style: breakpoints.sm ? {...child.props.style} : {...child.props.style, height: height}
          }
        )
      }
    }
  })

  return (
    <div ref={dualEl} className={classNames(className, styles.dual)} {...props}>
      {updatedChildren()}
    </div>
  );
}

Dual.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}

export default Dual