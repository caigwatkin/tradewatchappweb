import { Menu, toaster } from 'evergreen-ui'

function App() {
  return (
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
      </Menu.Group>
    </Menu>
  )
}

export default App
