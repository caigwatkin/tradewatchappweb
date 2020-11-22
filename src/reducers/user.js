import {
  USER_SIGN_IN_FAILURE,
  USER_SIGN_IN_PENDING,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_OUT_FAILURE,
  USER_SIGN_OUT_PENDING,
  USER_SIGN_OUT_SUCCESS,
} from '../actions/constants'

let DEFAULT_STATE = {
  user: null,

  userSignInError: null,
  userSignInPending: false,

  userSignOutError: null,
  userSignOutPending: false,
}

const user = (
  state = {
    ...DEFAULT_STATE,
  },
  action
) => {
  switch (action.type) {
    case USER_SIGN_IN_FAILURE: {
      return {
        ...state,
        userSignInError: action.error,
        userSignInPending: false,
      }
    }
    case USER_SIGN_IN_PENDING: {
      return {
        ...state,
        user: null,
        userSignInError: null,
        userSignInPending: true,
      }
    }
    case USER_SIGN_IN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        userSignInPending: false,
      }
    }

    case USER_SIGN_OUT_FAILURE: {
      return {
        ...state,
        userSignOutError: action.error,
        userSignOutPending: false,
      }
    }
    case USER_SIGN_OUT_PENDING: {
      return {
        ...state,
        userSignOutError: null,
        userSignOutPending: true,
      }
    }
    case USER_SIGN_OUT_SUCCESS: {
      return {
        ...state,
        user: null,
        userSignOutPending: false,
      }
    }

    default:
      return state
  }
}

export default user
