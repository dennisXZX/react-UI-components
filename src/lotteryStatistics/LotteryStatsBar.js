import React, { Component } from 'react'
import './LotteryStatsBar.css'

class LotteryStatsBar extends Component {
  render () {
    const {
      number,
      lastDrawn,
      drawFrequency,
      maxLastDrawn,
      maxDrawFrequency
    } = this.props

    const drawFrequencyPercent = Math.floor((90 * drawFrequency) / maxDrawFrequency);
    const lastDrawnPercent = Math.floor((70 * lastDrawn) / maxLastDrawn);

    return (
      <div className="bar-container">
        <div className="bar-last-drawn">
          <div className="last-drawn-percent" style={{ width : lastDrawnPercent + '%' }}>
            {lastDrawn + ' weeks'}
          </div>
        </div>
        <div
          className="bar-number">
          {number}
        </div>
        <div className="bar-draw-frequency">
          <div className="draw-frequency-percent" style={{ width : drawFrequencyPercent + '%' }}>
            {drawFrequency + ' times'}
          </div>
        </div>
      </div>
    )
  }
}

export default LotteryStatsBar
