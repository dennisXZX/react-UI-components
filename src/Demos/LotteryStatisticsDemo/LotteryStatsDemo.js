import React, { Component } from 'react'
import LotteryStatsHeader from './LotteryStatsHeader'
import LotteryStatsBar from './LotteryStatsBar'
import orderBy from "lodash/orderBy";

import lotterySet from './data'

class LotteryStatsDemo extends Component {

  state = {
    sortCondition: 'numerical',
    maxLastDrawn: 0,
    maxDrawFrequency: 0,
    lotterySetSorted: lotterySet
  }

  renderStatsBars = () => {
    const {
      maxDrawFrequency,
      maxLastDrawn
    } = this.state

    return this.state.lotterySetSorted.map((data, i) => {
      return (
        <LotteryStatsBar
          key={i}
          number={data.number}
          lastDrawn={data.lastDrawn}
          drawFrequency={data.drawFrequency}
          maxLastDrawn={maxLastDrawn}
          maxDrawFrequency={maxDrawFrequency}
        />
      )
    })
  }

  onSortStats = (event) => {
    const sortCondition = event.target.value
    const lotterySetSorted = this.sortStats(sortCondition)

    this.setState({
      sortCondition,
      lotterySetSorted
    });
  }

  sortStats = (sortCondition) => {
    let lotterySetSorted = [];

    // sort lottery set based on user selection
    if (sortCondition === 'numerical') {
      lotterySetSorted = orderBy(this.state.lotterySetSorted, ['number'], ['asc'])
    } else if (sortCondition === 'frequency') {
      lotterySetSorted = orderBy(this.state.lotterySetSorted, ['drawFrequency'], ['desc'])
    } else {
      lotterySetSorted = orderBy(this.state.lotterySetSorted, ['lastDrawn'], ['desc'])
    }

    return lotterySetSorted;
  }

  render () {
    return (
      <div className="container">
        <LotteryStatsHeader
          onSortStats={this.onSortStats}
        />

        {this.renderStatsBars()}
      </div>
    )
  }

  componentDidMount () {
    // extract the draw frequency number into an array
    const drawFrequencyArray = lotterySet.reduce((acc, curr) => {
      return [...acc, curr.drawFrequency];
    }, []);

    const lastDrawArray = lotterySet.reduce((acc, curr) => {
      return [...acc, curr.lastDrawn];
    }, []);

    // calculate the max draw frequency and last drawn time
    const maxDrawFrequency = Math.max(...drawFrequencyArray);
    const maxLastDrawn = Math.max(...lastDrawArray);

    this.setState({
      maxDrawFrequency,
      maxLastDrawn
    })
  }
}

export default LotteryStatsDemo
