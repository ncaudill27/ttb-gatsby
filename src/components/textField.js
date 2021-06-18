import React from "react"
import classNames from "classnames"
import { parseLabel } from "../utils/parse"

import styles from "./textField.module.css"

const TextField = React.forwardRef(
  ({ id, name, handleChange, error, ...props }, ref) => {
    const inputStyles = error
      ? classNames(styles.input, styles.error)
      : styles.input

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={id}>
          {parseLabel(id)}
        </label>
        <input
          id={id}
          ref={ref}
          className={inputStyles}
          value={name}
          onChange={handleChange}
          {...props}
        />
      </div>
    )
  }
)

export default TextField
