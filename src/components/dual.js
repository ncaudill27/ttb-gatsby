import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import useWindowSize from '../hooks/useWindowSize'
import classNames from 'classnames'

import styles from './dual.module.css'

const Dual = ({className, children, ...props}) => {
  const breakpoints = useBreakpoint()
  const [, isResizing] = useWindowSize()

  const dualEl = useRef(null)
  const [height, setHeight] = useState()

  useEffect(() => {
      setHeight(dualEl.current.getBoundingClientRect().height)
      console.log(isResizing);

      if (isResizing) setHeight(dualEl.current.getBoundingClientRect().height)
  }, [dualEl, isResizing])

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