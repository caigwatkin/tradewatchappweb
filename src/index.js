import App from './components/app/app'
import Sidebar from './components/sidebar/sidebar'
import { Pane } from 'evergreen-ui'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Pane display={'flex'} height={'98vh'}>
      <Pane
        border={'default'}
        display={'flex'}
        float={'left'}
        height={'100%'}
        width={'20%'}
      >
        <Sidebar />
      </Pane>

      <Pane
        border={'default'}
        display={'flex'}
        float={'left'}
        height={'100%'}
        width={'80%'}
      >
        <App />
      </Pane>
    </Pane>
  </React.StrictMode>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
