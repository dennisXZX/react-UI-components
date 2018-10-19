import React, { Component } from 'react';
import './App.css';

import ReduxDemo from './Demos/ReduxDemo/ReduxDemo'
// import ClockDemo from './Demos/ClockDemo/ClockDemo'
// import CurrencyConverterDemo from './Demos/CurrencyConverterDemo/CurrencyConverterDemo'
// import LotteryStatsDemo from './Demos/LotteryStatisticsDemo/LotteryStatsDemo'
// import ProgressBarDemo from './Demos/ProgressBarDemo/ProgressBarDemo'
// import NavbarDemo from './Demos/NavbarDemo/NavbarDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <ReduxDemo />
          {/*<ClockDemo />*/}
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
