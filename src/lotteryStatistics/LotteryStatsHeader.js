import React, { Component } from 'react'
import './LotteryStatsHeader.css'

class LotteryStatsHeader extends Component {
  render () {
    return (
      <div className="header">
        {/* diagram legends */}
        <div className="label">
          <div className="draw-frequency">
            <span className="draw-frequency-ball"></span>
            <span>Draw frequency</span>
          </div>

          <div className="last-drawn">
            <span className="last-drawn-ball"></span>
            <span>Time since last drawn</span>
          </div>
        </div>

        {/* sorting dropdown */}
        <div className="sort">
          <span>Sort by</span>
          <select
            onChange={this.sortStats}>
            <option
              value="numerical">
              Numerical
            </option>
            <option
              value="frequency">
              Drawn Frequency
            </option>
            <option
              value="lastDraw">
              Time since last draw
            </option>
          </select>
        </div>
      </div>
    )
  }
}

export default LotteryStatsHeader
