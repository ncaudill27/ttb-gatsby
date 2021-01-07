import React, { useState, useEffect, useRef } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import classNames from 'classnames'

import styles from './dual.module.css'

const Dual = ({className, children, section, ...props}) => {
  const breakpoints = useBreakpoint()

  const dualEl = useRef(null)
  const [height, setHeight] = useState()

  useEffect(() => {
    if (!!dualEl) {
      setHeight(dualEl.current.getBoundingClientRect().height)
    }
  }, [dualEl, height])

  const updatedChildren = () => React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.props.first) {
        return React.cloneElement(
          child, {
             className: classNames(child.props.className, styles.first),
             style: breakpoints.sm ? {} : {height: height}
          }
        )
      }
      else if (child.props.second) {
        return React.cloneElement(
          child, {
             className: classNames(child.props.className, styles.second),
             style: breakpoints.sm ? {} : {height: height}
          }
        )
      }
    }
  })

  console.log(height)

  return (
    <div ref={dualEl} className={classNames(className, styles.dual)} {...props}>
      {updatedChildren()}
    </div>
  );
}

export default Dual