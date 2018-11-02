import { Component } from 'react'
import ReactDOM from 'react-dom'

// find the div, which sits outside of the root div
const portalRoot = document.getElementById('portal')

export default class Portal extends Component {
  constructor () {
    super()

    // create a div element
    this.el = document.createElement('div')
  }

  // append the div element to the portal div when this component is mounted
  componentDidMount () {
    portalRoot.appendChild(this.el)
  }

  // remove the div element from the portal div when this component will be unmounted
  componentWillUnmount () {
    portalRoot.removeChild(this.el)
  }

  render () {
    const { children } = this.props;

    // create a portal
    return ReactDOM.createPortal(children, this.el)
  }
}
