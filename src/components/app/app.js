import { Pane, Text } from 'evergreen-ui'
import React from 'react'
import { PADDING } from '../../layoutConstants'

function App() {
  return (
    <Pane
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
        <Text>Header</Text>
      </Pane>

      <Pane
        display={'flex'}
        flexDirection={'column'}
        padding={PADDING}
        width={'100%'}
      >
        <Pane
          alignItems={'center'}
          background={'tint1'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          padding={PADDING}
        >
          <Text>Content</Text>
          <Text>Something else</Text>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default App
