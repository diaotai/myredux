export default function createStore(reducer){
  let currentState = undefined;
  let currentListentrs = [];
  currentState = reducer(currentState,{type:"INIT"})
  function subscribe(listener){
    if(currentListentrs.indexOf(listener)==-1){
      currentListentrs.push(listener);
    }
    return currentListentrs.length-1;
  }
  function unsubscribe(index){
    currentListentrs.splice(index,1);
  }
  function dispatch(action){
    currentState = reducer(currentState,action);
    for(let i in currentListentrs){
      currentListentrs[i]();
    }
  }
  function getState(){
    return currentState;
  }

  return {
    subscribe,
    unsubscribe,
    dispatch,
    getState
  }
}