import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import store from './store'
import AuthenticationTitle from './components/Auth.jsx'
import Register from './components/Register.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createTheme, MantineProvider } from '@mantine/core';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: '/signin',
    element: <AuthenticationTitle/>
  },
  {
    path: '/signup',
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={createTheme()}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
)
