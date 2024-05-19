import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={createTheme()}>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>,
)
