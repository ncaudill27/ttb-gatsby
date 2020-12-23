import React from 'react'

import styles from './dual.module.css'

const Dual = ({children, section, ...props}) => {

  const updatedChildren = () => React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.props.first) {
        return React.cloneElement(child, { className: styles.first })
      }
      else if (child.props.second) {
        return React.cloneElement(child, { className: styles.second })
      }
    }
  })

  return (
    <div className={styles.dual} {...props}>
      {updatedChildren()}
    </div>
  );
}

export default Dual