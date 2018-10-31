import React, { Component } from 'react'
import './App.css'

/* example from old to news */
// import NavbarDemo from './Demos/NavbarDemo/NavbarDemo'
// import ProgressBarDemo from './Demos/ProgressBarDemo/ProgressBarDemo'
// import LotteryStatsDemo from './Demos/LotteryStatisticsDemo/LotteryStatsDemo'
// import CurrencyConverterDemo from './Demos/CurrencyConverterDemo/CurrencyConverterDemo'
// import ClockDemo from './Demos/ClockDemo/ClockDemo'
// import ReduxCounterDemo from './Demos/ReduxCounterDemo/ReduxCounterDemo'
import ToggleRenderPropsDemo from './Demos/ToggleDemo/ToggleRenderPropsDemo'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <ToggleRenderPropsDemo>
            {({ on, toggle }) => (
              <div>
                {on && <h1>Show me</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </div>
            )}
          </ToggleRenderPropsDemo>
          {/*<ReduxCounterDemo />*/}
          {/*<ClockDemo />*/}
          {/*<LotteryStatsDemo />*/}
          {/*<CurrencyConverterDemo />*/}
          {/*<ProgressBarDemo />*/}
          {/*<NavbarDemo />*/}
        </div>
      </div>
    )
  }
}

export default App
