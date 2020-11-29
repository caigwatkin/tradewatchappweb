import { connect } from 'react-redux'
import { Heading, Menu, Pane, toaster } from 'evergreen-ui'
import { PADDING } from '../../layoutConstants'
import PropTypes from 'prop-types'
import React from 'react'
import { TEXT } from './constants'
import { useEffect } from 'react'
import {
  TRADEME_USER_SIGN_IN,
  TRADEME_USER_SIGN_OUT,
} from '../../actions/trademe'

const propTypes = {
  trademeUserSignIn: PropTypes.func.isRequired,
  trademeUserSignOut: PropTypes.func.isRequired,
  trademeUser: PropTypes.string,
  trademeUserSignInError: PropTypes.object,
  trademeUserSignInPending: PropTypes.bool.isRequired,
}

function Sidebar(props) {
  const {
    trademeUser,
    trademeUserSignIn,
    trademeUserSignInError,
    trademeUserSignInPending,
    trademeUserSignOut,
  } = props

  useEffect(() => {
    if (trademeUser) {
      toaster.success(TEXT.SIGN_IN_SUCCESS_TOAST_TITLE, {
        description: trademeUser,
      })
    } else {
      toaster.warning(TEXT.SIGN_OUT_SUCCESS_TOAST_TITLE) // TODO: make more elegant, since this will display on component mount
    }
  }, [trademeUser])

  useEffect(() => {
    if (trademeUserSignInError) {
      toaster.danger(TEXT.SIGN_IN_ERROR_TOAST_TITLE)
    }
  }, [trademeUserSignInError])

  useEffect(() => {
    if (trademeUserSignInPending) {
      toaster.notify(TEXT.SIGN_IN_PENDING_TOAST_TITLE)
    }
  }, [trademeUserSignInPending])

  const handleSignInOrOut = () => {
    if (trademeUser) {
      trademeUserSignOut()
    } else {
      trademeUserSignIn()
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
              {trademeUser ? TEXT.SIGN_OUT_MENU_ITEM : TEXT.SIGN_IN_MENU_ITEM}
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
    trademeUser: state.trademe.trademeUser,
    trademeUserSignInError: state.trademe.trademeUserSignInError,
    trademeUserSignInPending: state.trademe.trademeUserSignInPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    trademeUserSignIn: () => {
      dispatch({
        type: TRADEME_USER_SIGN_IN,
      })
    },
    trademeUserSignOut: () => {
      dispatch({
        type: TRADEME_USER_SIGN_OUT,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
