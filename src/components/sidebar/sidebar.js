import { Heading, Menu, Pane, toaster } from 'evergreen-ui'
import { PADDING } from '../../layoutConstants'
import React from 'react'
import { TEXT } from './constants'
import { useState } from 'react'

function Sidebar() {
  const [signedIn, setSignedIn] = useState(false)
  const handleSignIn = () => {
    if (signedIn) {
      toaster.warning(TEXT.SIGN_OUT_SUCCESS_TOAST_TITLE)
    } else {
      toaster.success(TEXT.SIGN_IN_SUCCESS_TOAST_TITLE, {
        description: TEXT.SIGN_IN_SUCCESS_TOAST_DESCRIPTION,
      })
    }
    setSignedIn(!signedIn)
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
            <Menu.Item onSelect={handleSignIn}>
              {signedIn ? TEXT.SIGN_OUT_MENU_ITEM : TEXT.SIGN_IN_MENU_ITEM}
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

export default Sidebar
