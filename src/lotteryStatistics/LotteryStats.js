import React, { Component } from 'react'
import LotteryStatsHeader from './LotteryStatsHeader'
import LotteryStatsBar from './LotteryStatsBar'

import data from './data'

class LotteryStats extends Component {

  state = {
    lotterySet: data,
    sortCondition: 'numerical',
    maxLastDrawn: 0,
    maxDrawFrequency: 0
  }

  renderStatsBars = () => {
    return this.state.lotterySet.map(data => {
      return (
        <LotteryStatsBar
          key={data.number}
          number={data.number}
          lastDrawn={data.lastDrawn}
          drawFrequency={data.drawFrequency}
          maxLastDrawn={this.state.maxLastDrawn}
          maxDrawFrequency={this.state.maxDrawFrequency}
        />
      )
    })
  }

  sortStats = (event) => {
    this.setState({ sortCondition: event.target.value });
  }

  componentDidMount () {
    // extract the draw frequency number into an array
    const drawFrequencyArray = this.state.lotterySet.reduce((acc, curr) => {
      return [...acc, curr.drawFrequency];
    }, []);

    const lastDrawArray = this.state.lotterySet.reduce((acc, curr) => {
      return [...acc, curr.lastDrawn];
    }, []);

    // calculate the max draw frequency
    const maxdrawFrequency = Math.max(...drawFrequencyArray);
    const maxlastDrawn = Math.max(...lastDrawArray);

    this.setState({
      maxDrawFrequency: maxdrawFrequency,
      maxLastDrawn: maxlastDrawn
    })
  }

  render () {

    return (
      <div className="container">
        <LotteryStatsHeader />

        {this.renderStatsBars()}
      </div>
    )
  }
}

export default LotteryStats
