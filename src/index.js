import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './root-cmp'
import config from './aws-exports'
import { store } from './store/store'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AmplifyProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AmplifyProvider>
)

