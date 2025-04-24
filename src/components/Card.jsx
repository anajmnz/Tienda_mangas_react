import ButtonCard from "./ButtonCard"

function Card({comic}) {
  
    return (
      <>
       <div className="comic-card">
                <img src={comic.imagen} alt={comic.nombre} />
                <h2 id="">{comic.nombre}</h2>
                <p id="">{comic.descripcion}</p>
                <p id="">Precio: {comic.precio}€</p>
                <ButtonCard id="">Añadir al carrito</ButtonCard>            
       </div>

      </>
    )}
   
export default Card