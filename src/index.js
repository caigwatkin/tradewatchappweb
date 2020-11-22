import App from './components/app/app'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import { Pane } from 'evergreen-ui'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import Sidebar from './components/sidebar/sidebar'

const sagaMiddleware = createSagaMiddleware()

const reduxMiddleware = [sagaMiddleware, logger]

const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)

reportWebVitals()
