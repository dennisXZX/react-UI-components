import React, { Component } from 'react';
import './App.css';

// import React components
import LotteryStats from './lotteryStatistics/LotteryStats'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <LotteryStats />
        </div>
      </div>
    );
  }
}

export default App;
