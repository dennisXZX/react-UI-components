import React, { Component } from 'react'
import styled from 'styled-components'
import Portal from '../PortalDemo/Portal'

class Modal extends Component {
  render () {
    const { children, on, toggle } = this.props

    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>Close</CloseButton>
              <div>
                {children}
              </div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}

export default Modal

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  padding: 15px;
  min-width: 350px;
  z-index: 1;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;   
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`