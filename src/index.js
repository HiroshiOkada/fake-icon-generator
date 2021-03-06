import React from 'react'
import { render } from 'react-snapshot'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import { getImageWatcher } from './tasks'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())

const imageWatcher = getImageWatcher(store)
store.subscribe(imageWatcher)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
