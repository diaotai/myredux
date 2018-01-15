function bindActionCreator(actionCreator,dispatch){
  return function(){
    dispatch(actionCreator.apply(this,arguments));
  }
}

export default function bindActionCreators(actionCreators,dispatch){
  if(typeof actionCreators =="function"){
    return bindActionCreator(actionCreators,dispatch);
  }
  if(typeof actionCreators !="object"){
    throw Error("传入actionCreators的参数只能是对象或函数")
  }
  let boundActionCreators = {};
  for(let key in actionCreators){
    let actionCreator = actionCreators[key];
    if(typeof actionCreator == "function"){
      boundActionCreators[key] = bindActionCreators(actionCreator,dispatch);
    }
  }
  return boundActionCreators;
}