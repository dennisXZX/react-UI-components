import React, { Component } from 'react'
import SideNavbar from '../Common-UI/SideNavbar'
import Button from '../Common-UI/Button'

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
