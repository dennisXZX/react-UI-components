import React, { Component } from 'react'
import { createStore } from 'redux'

class ReduxDemo extends Component {
  render () {
    return (
      <div>
        <div>
          <span id="counter"></span>
        </div>

        <button id='inc'>Increment</button>
        <button id='dec'>Decrement</button>
      </div>
    )
  }

  componentDidMount () {
    // create a reducer function to calculate state based on action passed
    function reducer (state, action) {
      switch (action.type) {
        case 'INC':
          return {
            ...state,
            counter: state.counter + 1
          }
        case 'DEC':
          return {
            ...state,
            counter: state.counter - 1
          }
        default:
          return state
      }
    }

    // set up initial state
    const initialState = {
      counter: 3
    }

    // create a store using Redux createStore function
    const store = createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    // define a function to update view
    function updateView () {
      document.querySelector('#counter').innerText = store.getState().counter
    }

    // subscribe to the view update function
    store.subscribe(updateView)

    // sync the UI with the store
    updateView()

    // add event listeners to buttons
    // so when these buttons are clicked, actions are dispatched to the store
    // the store would delegate reducers to handle these actions
    // reducers re-calculate new states based on the actions passed in
    // the store would then invoke all the callbacks in its listener list
    // the callback functions finally update UI with the new state from the store
    document.getElementById('inc').onclick = () => store.dispatch({ type: 'INC' })
    document.getElementById('dec').onclick = () => store.dispatch({ type: 'DEC' })
  }
}

export default ReduxDemo
