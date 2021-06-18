import React from "react"

import styles from "./flex.module.css"

const Flex = ({ children, ...props }) => {
  return (
    <div className={styles.flex} {...props}>
      {children}
    </div>
  )
}

export default Flex
