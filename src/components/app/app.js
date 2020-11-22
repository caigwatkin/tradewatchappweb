import { Pane, Text, toaster } from 'evergreen-ui'
import React from 'react'
import { PADDING } from '../../layoutConstants'
import { TEXT } from './constants'

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
        <Text>{TEXT.HEADER}</Text>
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
          onClick={() => toaster.notify(TEXT.CONTENT_SUCCESS_TOAST_TITLE)}
          padding={PADDING}
        >
          <Text>{TEXT.CONTENT}</Text>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default App
