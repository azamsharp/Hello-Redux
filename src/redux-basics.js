

const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter : 0
}

const rootReducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {
    return {
      counter : state.counter + 1
    }
  } else if(action.type == "ADD_COUNTER") {
    return {
      counter : state.counter + action.value
    }
  }

  return state
}

const store = createStore(rootReducer)

store.dispatch({type : "INC_COUNTER"})
console.log(store.getState())
store.dispatch({type : "ADD_COUNTER", value : 10})
console.log(store.getState())

store.subscribe(() => {
  console.log("[Subscribe]", store.getState())
})
