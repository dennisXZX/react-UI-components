import React, { Component } from 'react'
import './App.css'

// import NavbarDemo from './Demos/NavbarDemo/NavbarDemo'
// import ProgressBarDemo from './Demos/ProgressBarDemo/ProgressBarDemo'
// import LotteryStatsDemo from './Demos/LotteryStatisticsDemo/LotteryStatsDemo'
// import CurrencyConverterDemo from './Demos/CurrencyConverterDemo/CurrencyConverterDemo'
// import ClockDemo from './Demos/ClockDemo/ClockDemo'
// import ReduxCounterDemo from './Demos/ReduxCounterDemo/ReduxCounterDemo'
// import { Toggle } from './Utilities'
// import { Button, Modal } from './CommonUI'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          {/*<Toggle>*/}
            {/*{({ on, toggle }) => (*/}
              {/*<>*/}
                {/*<Button onClickHandler={toggle}>Login</Button>*/}
                {/*<Modal on={on} toggle={toggle}>*/}
                  {/*<h1>Still in modal</h1>*/}
                {/*</Modal>*/}
              {/*</>*/}
            {/*)}*/}
          {/*</Toggle>*/}

          {/*<Toggle>*/}
            {/*{({ on, toggle }) => (*/}
              {/*<Fragment>*/}
                {/*{on && <h1>Show me</h1>}*/}
                {/*<button onClick={toggle}>Show / Hide</button>*/}
              {/*</Fragment>*/}
            {/*)}*/}
          {/*</Toggle>*/}

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
