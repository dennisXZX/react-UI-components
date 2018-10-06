import React, { Component } from 'react'
import Button from '../Common-UI/Button'
import ProgressBar from '../Common-UI/ProgressBar'
import './ProgressBarDemo.css'

class ProgressBarDemo extends Component {
  state = {
    progress: 10
  }

  onClickHandler = () => {
    this.setState({
      progress: Math.floor(Math.random() * 100 + 1)
    })
  }

  render () {
    const {
      progress
    } = this.state

    return (
      <div className="container">
        <Button
          text="Change Progress"
          onClickHandler={this.onClickHandler} />
        <ProgressBar
          progressColor="green"
          progress={progress} />
      </div>
    )
  }
}

export default ProgressBarDemo
