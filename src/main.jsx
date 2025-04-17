import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Contact from './Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/",
    element: <Contact />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
