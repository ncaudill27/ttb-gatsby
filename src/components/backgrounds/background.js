import React from "react"
import PropTypes from "prop-types"

const Background = React.forwardRef(
  ({ background, children, ...props }, ref) => {
    const BackgroundTag = background

    return (
      <BackgroundTag ref={ref} {...props}>
        {children}
      </BackgroundTag>
    )
  }
)

Background.propTypes = {
  background: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Background
