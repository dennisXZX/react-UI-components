import React, { Component } from 'react'
import './App.css'

/* example from old to news */
// import NavbarDemo from './Demos/NavbarDemo/NavbarDemo'
// import ProgressBarDemo from './Demos/ProgressBarDemo/ProgressBarDemo'
// import LotteryStatsDemo from './Demos/LotteryStatisticsDemo/LotteryStatsDemo'
// import CurrencyConverterDemo from './Demos/CurrencyConverterDemo/CurrencyConverterDemo'
// import ClockDemo from './Demos/ClockDemo/ClockDemo'
// import ReduxCounterDemo from './Demos/ReduxCounterDemo/ReduxCounterDemo'
import Toggle from './Demos/ToggleDemo/Toggle'
// import Portal from './Demos/PortalDemo/Portal'
import Modal from './Demos/ModalDemo/Modal'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h2>Uncomment the React component you want to see in source code</h2>

        <div className="demo-area">
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal</h1>
                </Modal>
              </>
            )}
          </Toggle>

          {/*<Portal>*/}
          {/*<h1>Hello Portal!</h1>*/}
          {/*</Portal>*/}

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
