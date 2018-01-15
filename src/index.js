import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import double from "./reducers/double";
import { createStore } from './redux/index'


const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div>
     <h1>hello world</h1>
      <Counter
     value={store.getState()}
     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
   />
  </div>
 ,
  rootEl
)

render()
store.subscribe(render)
// store.subscribe(()=>{console.log("hello world")})
