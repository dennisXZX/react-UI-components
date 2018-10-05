import React, { Component } from 'react'
import LotteryStatsBar from './LotteryStatsBar'

import './LotteryStatistics.css'
import data from './data'

class LotteryStatistics extends Component {

  state = {
    data: data,
    sortCondition: 'numerical',
    maxlastDrawn: 0,
    maxdrawFrequency: 0
  }

  renderStats = () => {
    return this.state.data.map(data => {
      return (
        <LotteryStatsBar
          key={data.number}
          number={data.number}
          lastDrawn={data.lastDrawn}
          drawFrequency={data.drawFrequency}
          maxlastDrawn={this.state.maxlastDrawn}
          maxdrawFrequency={this.state.maxdrawFrequency}
        />
      )
    })
  }

  sortStats = (event) => {
    this.setState({ sortCondition: event.target.value });
  }

  componentDidMount () {
    // extract the draw frequency number into an array
    const drawFrequencyArray = this.state.data.reduce((acc, curr) => {
      return [...acc, curr.drawFrequency];
    }, []);

    const lastDrawArray = this.state.data.reduce((acc, curr) => {
      return [...acc, curr.lastDrawn];
    }, []);

    // calculate the max draw frequency
    const maxdrawFrequency = Math.max(...drawFrequencyArray);
    const maxlastDrawn = Math.max(...lastDrawArray);

    this.setState({
      maxdrawFrequency: maxdrawFrequency,
      maxlastDrawn: maxlastDrawn
    })
  }

  render () {

    return (
      <div className="container">
        <div className="header">

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

          <div className="sort">
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
        {/* end of header */}

        <div className="stats-content">
          {this.renderStats()}
        </div>
      </div>
    )
  }
}

export default LotteryStatistics
