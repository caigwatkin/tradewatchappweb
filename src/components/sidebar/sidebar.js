import { Menu, Pane, Text, toaster } from 'evergreen-ui'
import React from 'react'
import { PADDING } from '../../layoutConstants'

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
        background={'tint2'}
        display={'flex'}
        float={'left'}
        justifyContent={'center'}
        padding={PADDING}
      >
        <Text>LOGO</Text>
      </Pane>

      <Pane>
        <Menu>
          <Menu.Group>
            <Menu.Item
              onSelect={() =>
                toaster.success('Signed in', {
                  description: 'You are now signed in to Trade Me',
                })
              }
            >
              Sign in to Trade Me
            </Menu.Item>
            <Menu.Item
              onSelect={() =>
                toaster.warning('NO ELP', {
                  description: 'NOPERS',
                })
              }
            >
              Help
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </Pane>
    </Pane>
  )
}

export default Sidebar
