import { useState} from 'react'
import { Link } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      App
      <Link to="contact/">contacto</Link>
    </>
  )
}

export default App
