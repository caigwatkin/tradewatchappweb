import { connect } from 'react-redux'
import { Heading, Menu, Pane, toaster } from 'evergreen-ui'
import { PADDING } from '../../layoutConstants'
import PropTypes from 'prop-types'
import React from 'react'
import { TEXT } from './constants'
import { useEffect } from 'react'
import { USER_SIGN_IN, USER_SIGN_OUT } from '../../actions/constants'

const propTypes = {
  signInUser: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  userSignInPending: PropTypes.bool.isRequired,
  userSignOutPending: PropTypes.bool.isRequired,
}

function Sidebar(props) {
  const {
    signInUser,
    signOutUser,
    user,
    userSignInPending,
    userSignOutPending,
  } = props

  useEffect(() => {
    if (user) {
      toaster.success(TEXT.SIGN_IN_SUCCESS_TOAST_TITLE, {
        description: user.uid,
      })
    } else {
      toaster.warning(TEXT.SIGN_OUT_SUCCESS_TOAST_TITLE) // TODO: make more elegant, since this will display on component mount
    }
  }, [user])

  useEffect(() => {
    if (userSignInPending) {
      toaster.notify(TEXT.SIGN_IN_PENDING_TOAST_TITLE)
    }
  }, [userSignInPending])

  useEffect(() => {
    if (userSignOutPending) {
      toaster.notify(TEXT.SIGN_OUT_PENDING_TOAST_TITLE)
    }
  }, [userSignOutPending])

  const handleSignInOrOut = () => {
    if (user) {
      signOutUser()
    } else {
      signInUser()
    }
  }

  return (
    <Pane
      background={'tint2'}
      display={'flex'}
      flexDirection={'column'}
      height={'100%'}
      padding={PADDING}
      width={'100%'}
    >
      <Pane
        alignItems={'center'}
        display={'flex'}
        float={'left'}
        justifyContent={'center'}
        onClick={() => toaster.success(TEXT.LOGO_SUCCESS_TOAST_TITLE)}
        padding={PADDING}
      >
        <Heading>{TEXT.LOGO}</Heading>
      </Pane>

      <Pane>
        <Menu>
          <Menu.Group>
            <Menu.Item onSelect={handleSignInOrOut}>
              {user ? TEXT.SIGN_OUT_MENU_ITEM : TEXT.SIGN_IN_MENU_ITEM}
            </Menu.Item>

            <Menu.Item
              onSelect={() =>
                toaster.warning(TEXT.HELP_SUCCESS_TOAST_TITLE, {
                  description: TEXT.HELP_SUCCESS_TOAST_DESCRIPTION,
                })
              }
            >
              {TEXT.HELP_MENU_ITEM}
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </Pane>
    </Pane>
  )
}

Sidebar.propTypes = propTypes

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userSignInPending: state.user.userSignInPending,
    userSignOutPending: state.user.userSignOutPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: () => {
      dispatch({
        type: USER_SIGN_IN,
      })
    },
    signOutUser: (user) => {
      dispatch({
        type: USER_SIGN_OUT,
        user: user,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
