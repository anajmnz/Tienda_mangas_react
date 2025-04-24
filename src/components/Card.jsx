import ButtonCard from "./ButtonCard"
import './Card.css';

function Card({comic}) {
  
    return (
      <>
       <div className="comic-card">
                <img src={comic.imagen} alt={comic.nombre} />
                <h2 id="comic_nombre">{comic.nombre}</h2>
                <p id="comic_description">{comic.descripcion}</p>
                <p id="comic_precio">Precio: {comic.precio}€</p>
                <ButtonCard id="btn_comic">Añadir al carrito</ButtonCard>            
       </div>

      </>
    )}
   
export default Card