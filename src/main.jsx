import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage/HomePage'
import TimeLine from './pages/TimeLinePage/TimeLine'
import Stats from './pages/StatsPage/Stats'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
       index:true,
       Component: HomePage,
      },
      {
       path:"/timeline",
       Component: TimeLine,
      },
      {
       path:"/stats",
       Component: Stats,
      },
    ],
    errorElement: <NotFoundPage />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
