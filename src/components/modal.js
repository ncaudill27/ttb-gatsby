import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Dialog from '@reach/dialog'
import '../styles/custom-properties.css'

const Modal = ({showDialog, closeDialog, children, ...props}) => (
  <StyledDialog
    isOpen={showDialog}
    onDismiss={closeDialog}
    {...props}
  >
    {children}
  </StyledDialog>
)

const StyledDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  background-color: var(--pri-light);
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  closeDialog: PropTypes.func.isRequired
}