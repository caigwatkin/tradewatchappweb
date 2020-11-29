import { all, fork } from 'redux-saga/effects'
import { trademe } from './trademe'

function* rootSaga() {
  yield all([fork(trademe)])
}

export default rootSaga
