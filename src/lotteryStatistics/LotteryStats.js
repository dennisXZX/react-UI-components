import React, { Component } from 'react'
import LotteryStatsHeader from './LotteryStatsHeader'
import LotteryStatsBar from './LotteryStatsBar'
import orderBy from "lodash/orderBy";

import lotterySet from './data'

class LotteryStats extends Component {

  state = {
    lotterySet: lotterySet,
    sortCondition: 'numerical',
    maxLastDrawn: 0,
    maxDrawFrequency: 0
  }

  renderStatsBars = () => {
    const { sortCondition } = this.state;

    let lotterySetSorted = [];

    // sort lottery set based on user selection
    if (sortCondition === 'numerical') {
      lotterySetSorted = orderBy(this.state.lotterySet, ['number'], ['asc'])
    } else if (sortCondition === 'frequency') {
      lotterySetSorted = orderBy(this.state.lotterySet, ['drawFrequency'], ['desc'])
    } else {
      lotterySetSorted = orderBy(this.state.lotterySet, ['lastDrawn'], ['desc'])
    }

    return lotterySetSorted.map(data => {
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
    const maxDrawFrequency = Math.max(...drawFrequencyArray);
    const maxLastDrawn = Math.max(...lastDrawArray);

    this.setState({
      maxDrawFrequency,
      maxLastDrawn
    })
  }

  render () {

    return (
      <div className="container">
        <LotteryStatsHeader
          sortStats={this.sortStats}
        />

        {this.renderStatsBars()}
      </div>
    )
  }
}

export default LotteryStats
