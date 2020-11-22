import { Heading, Menu, Pane, toaster } from 'evergreen-ui'
import { PADDING } from '../../layoutConstants'
import React from 'react'
import { TEXT } from './constants'

function Sidebar() {
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
        padding={PADDING}
      >
        <Heading>{TEXT.LOGO}</Heading>
      </Pane>

      <Pane>
        <Menu>
          <Menu.Group>
            <Menu.Item
              onSelect={() =>
                toaster.success(TEXT.SIGNED_IN_TOAST_TITLE, {
                  description: TEXT.SIGNED_IN_TOAST_DESCRIPTION,
                })
              }
            >
              {TEXT.SIGN_IN}
            </Menu.Item>

            <Menu.Item
              onSelect={() =>
                toaster.warning(TEXT.HELPED_TOAST_TITLE, {
                  description: TEXT.HELPED_TOAST_DESCRIPTION,
                })
              }
            >
              {TEXT.HELP}
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </Pane>
    </Pane>
  )
}

export default Sidebar
