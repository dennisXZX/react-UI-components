import React, { Component } from 'react'
import styled from 'styled-components'
import { position, Portal } from '../Utilities'
import { Card, Icon } from './index'

class Modal extends Component {
  render () {
    const { children, on, toggle } = this.props

    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>
                {children}
              </div>
            </ModalCard>
            <Background onClick={toggle}/>
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}

export default Modal

const ModalWrapper = styled.div`
  ${position.absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled(Card)`
  position: relative;
  min-width: 350px;
  z-index: 1;
`

const CloseButton = styled.button`
  ${position.absolute({
    y: 'top',
    x: 'right'
  })};
  border: none;
  background: transparent;
  outline: none;
  padding: 10px;
  cursor: pointer;
`

const Background = styled.div`
  ${position.absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`