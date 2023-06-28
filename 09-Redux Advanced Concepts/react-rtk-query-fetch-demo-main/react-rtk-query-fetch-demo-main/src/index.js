import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from './features/api/apiSlice'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
