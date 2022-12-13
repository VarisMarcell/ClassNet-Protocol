import React from 'react'
import ReactDOM from 'react-dom/client'
import JoinSession from '../sorces/JoinSessionPage'
import CreateSession from '../sorces/CreateSessionPage'
import UserView from '../sorces/JoinUserView/userView'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/JoinSession",
    element: <JoinSession />
  },
  {
    path: "/CreateSession",
    element: <CreateSession />
  },
  {
    path: "/joinSession/userView/:session/:name/:seat",
    element: <UserView />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
