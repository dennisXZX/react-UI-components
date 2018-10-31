import React, { Component } from 'react'

class ToggleDemo extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render () {
    const { children } = this.props

    return children({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}

export default ToggleDemo
