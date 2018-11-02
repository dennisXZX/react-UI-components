import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
  render () {
    const {
      text = "Login",
      onClickHandler
    } = this.props

    return (
      <div>
        <button
          type="button"
          className="button"
          onClick={onClickHandler}>
          {text}
        </button>
      </div>
    )
  }
}

export default Button
