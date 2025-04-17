import { useState} from 'react'
import { Link } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Link to="/">Home</Link>
      <Link to="carrito/">Carrito</Link>
      <Link to="contact/">Contacto</Link>
      <Link to="registro/">Log In</Link>
    </>
  )
}

export default App
