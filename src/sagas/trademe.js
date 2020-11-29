import { takeLatest } from 'redux-saga/effects'
import { TRADEME_USER_SIGN_IN, TRADEME_USER_SIGN_OUT } from '../actions/trademe'
import { trademeUserSignIn, trademeUserSignOut } from '../actions/trademe'

export function* trademe() {
  yield takeLatest(TRADEME_USER_SIGN_IN, trademeUserSignIn)
  yield takeLatest(TRADEME_USER_SIGN_OUT, trademeUserSignOut)
}
