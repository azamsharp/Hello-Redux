
const initialState = {
  counter : 0,
  results : []
}

const reducer = (state = initialState,action) => {

  if(action.type == "INC_COUNTER") {

      return {
        ...state,
        counter : state.counter + 1
      }
  } else if(action.type == "ADD_COUNTER") {
      return {
        ...state,
        counter : state.counter + action.value
      }
    }
    else if(action.type == "SAVE_RESULT") {
      return {
        ...state,
        results : state.results.concat(state.counter)
      }
    }

  return state
}

export default reducer
