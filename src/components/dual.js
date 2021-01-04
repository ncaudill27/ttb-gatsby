import React from 'react'
import classNames from 'classnames'

import styles from './dual.module.css'

const Dual = ({className, children, section, ...props}) => {

  const updatedChildren = () => React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.props.first) {
        return React.cloneElement(child, { className: classNames(child.props.className, styles.first) })
      }
      else if (child.props.second) {
        return React.cloneElement(child, { className: classNames(child.props.className, styles.second) })
      }
    }
  })

  return (
    <div className={classNames(className, styles.dual)} {...props}>
      {updatedChildren()}
    </div>
  );
}

export default Dual