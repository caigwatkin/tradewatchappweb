import {
  TRADEME_USER_SIGN_IN_FAILURE,
  TRADEME_USER_SIGN_IN_PENDING,
  TRADEME_USER_SIGN_IN_SUCCESS,
  TRADEME_USER_SIGN_OUT_SUCCESS,
} from '../actions/trademe'

let DEFAULT_STATE = {
  trademeUser: null,

  trademeUserSignInError: null,
  trademeUserSignInPending: false,
}

const trademe = (
  state = {
    ...DEFAULT_STATE,
  },
  action
) => {
  switch (action.type) {
    case TRADEME_USER_SIGN_IN_FAILURE: {
      return {
        ...state,
        trademeUserSignInError: action.error,
        trademeUserSignInPending: false,
      }
    }
    case TRADEME_USER_SIGN_IN_PENDING: {
      return {
        ...state,
        trademeUser: null,
        trademeUserSignInError: null,
        trademeUserSignInPending: true,
      }
    }
    case TRADEME_USER_SIGN_IN_SUCCESS: {
      return {
        ...state,
        trademeUser: action.trademeUser,
        trademeUserSignInPending: false,
      }
    }

    case TRADEME_USER_SIGN_OUT_SUCCESS: {
      return {
        ...state,
        trademeUser: null,
      }
    }

    default:
      return state
  }
}

export default trademe
