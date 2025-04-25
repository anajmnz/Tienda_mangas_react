import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Contact from './Contact.jsx'
import Carrito from './Carrito.jsx'
import LogIn from './LogIn.jsx'
import { ClerkProvider } from '@clerk/clerk-react'



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
    path: "carrito/",
    element: <Carrito />,
  },
  {
    path: "registro/",
    element: <LogIn />,
  },
  {
    path: "contact/",
    element: <Contact />,
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
  </ClerkProvider>
)
