import React, { Component } from 'react'
import './ProgressBar.css'

class ProgressBar extends Component {
  static defaultProps = {
    progressColor: 'green',
    backgroundColor: 'lightgrey',
    progress: 0
  };

  render () {
    const {
      backgroundColor,
      progressColor,
      progress
    } = this.props

    return (
      <div
        className="progressbar"
        style={{ backgroundColor: backgroundColor }}>
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            backgroundColor: progressColor
          }}></div>
        <div>{progress} %</div>
      </div>
    )
  }
}

export default ProgressBar
