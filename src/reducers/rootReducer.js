import { combineReducers } from 'redux'
import user from './user'

const combinedReducer = combineReducers({
  user: user,
})

const rootReducer = (state, action) => {
  return combinedReducer(state, action)
}

export default rootReducer
