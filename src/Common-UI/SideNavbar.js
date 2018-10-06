import React, { Component } from 'react'
import './SideNavbar.css'

class SideNavbar extends Component {
  render () {
    const {
      visible,
      navItems
    } = this.props

    return (
      <ul id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
        {navItems.map(navItem => {
          return <li><a>&gt; {navItem.name}</a></li>
        })}
      </ul>
    )
  }
}

export default SideNavbar
