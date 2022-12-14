import React from 'react'
import ReactDOM from 'react-dom/client'

import { theme } from 'loft-taxi-mui-theme'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import App from './components/app'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// eslint-disable-next-line jest/require-hook
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ThemeProvider theme={theme}>
                  <App />
              </ThemeProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line jest/require-hook
reportWebVitals()
