import ButtonCard from "./ButtonCard"

function Card({comic}) {
  
    return (
      <>
       <div className="comic-card">
                <img src={comic.imagen} alt={comic.nombre} />
                <h2>{comic.nombre}</h2>
                <p>{comic.descripcion}</p>
                <p>Precio: {comic.precio}€</p>
                <ButtonCard>Añadir al carrito</ButtonCard>            
       </div>

      </>
    )
  }
  
export default Card