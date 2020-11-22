import { takeLatest } from 'redux-saga/effects'
import { USER_SIGN_IN, USER_SIGN_OUT } from '../actions/constants'
import { userSignIn, userSignOut } from '../actions/user'

export function* user() {
  yield takeLatest(USER_SIGN_IN, userSignIn)
  yield takeLatest(USER_SIGN_OUT, userSignOut)
}
