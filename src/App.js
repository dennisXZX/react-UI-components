import React, { Component } from 'react';
import './App.css';

// import React components
import LotteryStatistics from './lotteryStatistics/LotteryStatistics'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <LotteryStatistics />
        </div>
      </div>
    );
  }
}

export default App;
