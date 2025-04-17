import { Link } from "react-router";

function Header() {
  

    return (
      <>
      <Link to="/">Home</Link>
      <Link to="carrito/">Carrito</Link>
      <Link to="contact/">Contacto</Link>
      <Link to="registro/">Log In</Link>
       
      </>
    )
  }
  
  export default Header