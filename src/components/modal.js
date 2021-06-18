import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Dialog from "@reach/dialog"
import '@reach/dialog/styles.css'
import "../styles/custom-properties.css"

const Modal = ({ showDialog, closeDialog, children, ...props }) => (
  <StyledDialog isOpen={showDialog} onDismiss={closeDialog} {...props}>
    {children}
  </StyledDialog>
)

const StyledDialog = styled(Dialog)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  background: none;
  padding: 0;

  @media (min-width: 700px) {
    max-width: 500px;
    border-radius: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
`

Modal.propTypes = {
  ariaLabelledby: PropTypes.string.isRequired,
  showDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default Modal
