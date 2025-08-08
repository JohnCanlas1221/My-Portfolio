import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Header from './Header.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter ([
  { path:"/",
    element: <Header />,
    errorElement: <div>404 not Found</div>,
    children: [
      {
      index: true,
      element: <Home />
      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/Projects',
        element: <Projects />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
