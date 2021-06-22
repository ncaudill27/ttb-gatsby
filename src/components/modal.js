import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Dialog from "@reach/dialog"
import "@reach/dialog/styles.css"
// import "../styles/custom-properties.css"

const Modal = ({ showDialog, closeDialog, ariaLabelledby, children }) => (
  <StyledDialog
    isOpen={showDialog}
    onDismiss={closeDialog}
    aria-labelledby={ariaLabelledby}
  >
    {children}
  </StyledDialog>
)

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: fit-content;
  background: none;
  padding: 0;

  @media (min-width: 700px) {
    max-width: 500px;
    border-radius: 3px;
  }
`

Modal.propTypes = {
  ariaLabelledby: PropTypes.string.isRequired,
  showDialog: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
}

export default Modal
