import React, { Component } from 'react';
import './App.css';

// import LotteryStatsDemo from './LotteryStatisticsDemo/LotteryStatsDemo'
// import ProgressBarDemo from './ProgressBarDemo/ProgressBarDemo'
// import NavbarDemo from './NavbarDemo/NavbarDemo'
// import CurrencyConverterDemo from './CurrencyConverterDemo/CurrencyConverterDemo'
import ClockDemo from './ClockDemo/ClockDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <ClockDemo />
          {/*<CurrencyConverterDemo />*/}
          {/*<LotteryStatsDemo />*/}
          {/*<ProgressBarDemo />*/}
          {/*<NavbarDemo />*/}
        </div>
      </div>
    );
  }
}

export default App;
