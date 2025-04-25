import ButtonCard from "./ButtonCard"
import './Card.css';

function Card({comic}) {
  
    return (
      <>
       <div className="carta-comic-pr ">
          <img id="imagen-comic-pr" src={comic.imagen} alt={comic.nombre} />
          <h2 id="titulo-comic-pr">{comic.nombre}</h2>
          <p id="descripcion-comic-pr">{comic.descripcion.length > 100 ? comic.descripcion.slice(0, 100) + '...' : comic.descripcion}</p>
          <p id="comic_precio">Precio: {comic.precio}€</p>
          <ButtonCard comic={comic} />           
       </div>

      </>
    )}
   
export default Card