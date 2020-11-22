import { call, put } from 'redux-saga/effects'
import { StatusCodes } from 'http-status-codes'
import {
  USER_SIGN_IN_FAILURE,
  USER_SIGN_IN_PENDING,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT_FAILURE,
  USER_SIGN_OUT_PENDING,
  USER_SIGN_OUT_SUCCESS,
} from './constants'
import { userSignInPost, userSignOutPost } from '../apis/user'

export function* userSignIn() {
  try {
    yield put({
      type: USER_SIGN_IN_PENDING,
    })

    const responsePayload = yield call(userSignInPost)

    if (responsePayload && responsePayload.status === StatusCodes.OK) {
      yield put({
        type: USER_SIGN_IN_SUCCESS,
        user: responsePayload.body,
      })
    } else {
      throw responsePayload
    }
  } catch (e) {
    yield put({
      error: e,
      type: USER_SIGN_IN_FAILURE,
    })
  }
}

export function* userSignOut() {
  try {
    yield put({
      type: USER_SIGN_OUT_PENDING,
    })

    const responsePayload = yield call(userSignOutPost)

    if (responsePayload && responsePayload.status === StatusCodes.OK) {
      yield put({
        type: USER_SIGN_OUT_SUCCESS,
      })
    } else {
      throw responsePayload
    }
  } catch (e) {
    yield put({
      error: e,
      type: USER_SIGN_OUT_FAILURE,
    })
  }
}
