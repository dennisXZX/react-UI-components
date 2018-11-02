import React, { Component } from 'react'
import { Button, SideNavbar } from '../../Common-UI'

class NavbarDemo extends Component {
  state = {
    visible: true,
    navItems: [
      {
        name: "Home"
      },
      {
        name: "Purchase"
      },
      {
        name: "About"
      }
    ]
  }

  onClickHandler = () => {
    this.setState(prev => ({
      visible: !prev.visible
    }))
  }

  render () {
    const {
      visible,
      navItems
    } = this.state

    return (
      <div className="container">
        <Button
          text="Toggle Navbar"
          onClickHandler={this.onClickHandler} />
        <SideNavbar
          navItems={navItems}
          visible={visible} />
      </div>
    )
  }
}

export default NavbarDemo
