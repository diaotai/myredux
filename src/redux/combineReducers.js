export default function combineReducers(reducers){
 // const reducerKeys = Object.keys(reducers);
  let finalReducer = {};
  for(let key in reducers){
    let reducer = reducers[key];
    if(typeof reducer == "function"){
      finalReducer[key]=reducer;
    }
  }
  return function(state={},action){
    //let finalReducerKeys = Object.keys(finalReducer);
    for(let key in finalReducer){
      let currentReducer = finalReducer[key];
      let currentState = state[key];
      let nextState = currentReducer(currentState,currentReducer);
      if(nextState===undefined){
        throw Error("reducer结果不能为undefined")
      }
      state[key]=nextState;
    }
    return state;
  }
}