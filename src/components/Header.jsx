import { Link } from "react-router";
import './Header.css';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function Header() {
  

    return (
      <>
      <div id="header">
        <div id="header_espacio_foto">
          <img id="logo_header" src="https://upload.wikimedia.org/wikipedia/it/thumb/2/2c/One_Piece_Logo.svg/1920px-One_Piece_Logo.svg.png?20100303192349" alt="Logo One Piece" />
        </div>

        <div id="header_espacio_nav">
          <Link to="/">Home</Link>
          <Link to="carrito/">Carrito</Link>
          <Link to="contact/">Contacto</Link>
          <Link to="registro/">Log In</Link>
          <SignedIn>
           <UserButton />
        </SignedIn>
      
        </div>

      </div>
      </>
    )
  }
  
  export default Header