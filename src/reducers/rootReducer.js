import { combineReducers } from 'redux'
import trademe from './trademe'

const combinedReducer = combineReducers({
  trademe: trademe,
})

const rootReducer = (state, action) => {
  return combinedReducer(state, action)
}

export default rootReducer
