import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScrollPage from './comps/ScrollPage.tsx'
import UserPage from './comps/UserPage.tsx'
import App from './App.tsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ScrollPage/>
      },
      {
        path: '/user',
        element: <UserPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
