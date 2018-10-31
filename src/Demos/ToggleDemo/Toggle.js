import { Component } from 'react'

class Toggle extends Component {
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

    // this children prop is a function
    // which accepts state and a handler function as params
    // this way whatever is being rendered can get access to the state and function
    return children({
      on: this.state.on,
      toggle: this.toggle
    })
  }
}

export default Toggle
