import { all, fork } from 'redux-saga/effects'
import { user } from './user'

function* rootSaga() {
  yield all([fork(user)])
}

export default rootSaga
