import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux'
import {store} from './store'
import AuthenticationTitle from './components/Auth.jsx'
import Register from './components/Register.jsx'
import Posts from './components/Posts.jsx'
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
  },
  {
    path: '/posts',
    element: <Posts/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <MantineProvider theme={createTheme()}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </MantineProvider>
)
