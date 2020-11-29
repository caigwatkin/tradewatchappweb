import { call, put } from 'redux-saga/effects'
import { StatusCodes } from 'http-status-codes'
import { trademeOauthRequestTokenPost } from '../apis/trademe'

const querystring = require('querystring')

export const TRADEME_USER_SIGN_IN = 'TRADEME_USER_SIGN_IN'
export const TRADEME_USER_SIGN_IN_FAILURE = 'TRADEME_USER_SIGN_IN_FAILURE'
export const TRADEME_USER_SIGN_IN_PENDING = 'TRADEME_USER_SIGN_IN_PENDING'
export const TRADEME_USER_SIGN_IN_SUCCESS = 'TRADEME_USER_SIGN_IN_SUCCESS'

export function* trademeUserSignIn() {
  try {
    yield put({
      type: TRADEME_USER_SIGN_IN_PENDING,
    })

    const response = yield call(trademeOauthRequestTokenPost)

    if (!response || response.status !== StatusCodes.OK) {
      throw response
    }

    const responseData = querystring.parse(response.data)

    yield put({
      type: TRADEME_USER_SIGN_IN_SUCCESS,
      trademeUser: responseData.oauth_token,
    })
  } catch (e) {
    yield put({
      error: e,
      type: TRADEME_USER_SIGN_IN_FAILURE,
    })
  }
}

export const TRADEME_USER_SIGN_OUT = 'TRADEME_USER_SIGN_OUT'
export const TRADEME_USER_SIGN_OUT_SUCCESS = 'TRADEME_USER_SIGN_OUT_SUCCESS'

export function* trademeUserSignOut() {
  yield put({
    type: TRADEME_USER_SIGN_OUT_SUCCESS,
  })
}
