import React, { Component } from 'react'
import Clock from './Clock'

class ClockDemo extends Component {
  state = {
    time: new Date()
  }

  render () {
    // spread the object and pass them to Clock component as props
    return <Clock {...this._extract(this.state.time)} />
  }

  componentDidMount () {
    // this._interval is a numeric, non-zero value which identifies the timer
    this._interval = setInterval(this._updateTime, 1000)
  }

  componentWillUnmount () {
    clearInterval(this._interval)
  }

  _extract = (time) => {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    }
  }

  _updateTime = () => {
    this.setState({
      time: new Date(this.state.time.getTime() + 1000)
    })
  }
}

export default ClockDemo
