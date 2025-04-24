import { Link } from "react-router";

function Header() {
  

    return (
      <>
      <div id="header_espacio_foto">
        <img src="https://upload.wikimedia.org/wikipedia/it/thumb/2/2c/One_Piece_Logo.svg/1920px-One_Piece_Logo.svg.png?20100303192349" alt="Logo One Piece" />
      </div>

      <div id="header_espacio_links">
        <Link to="/">Home</Link>
        <Link to="carrito/">Carrito</Link>
        <Link to="contact/">Contacto</Link>
        <Link to="registro/">Log In</Link>
        </div>
      </>
    )
  }
  
  export default Header