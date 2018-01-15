import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import double from "./reducers/double";
import { createStore,combineReducers } from './redux/index'
let reducer = combineReducers({counter,double})
const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => {
 // console.log(store.getState())
  return ReactDOM.render(
  <div>
     <h1>hello world</h1>
      <Counter
     value={store.getState().counter}
     value1={store.getState().double}
     half={() => store.dispatch({type:"HALF"})}
     double={() => store.dispatch({type:"DOUBLE"})}
     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
   />
  </div>
 ,
  rootEl
)}

render()
store.subscribe(render)
// store.subscribe(()=>{console.log("hello world")})
