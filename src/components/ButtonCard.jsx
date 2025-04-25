import './ButtonCard.css';

function ButtonCard({ comic, onAddToCart }) {
  const handleAddToCarrito = () => {
    // Obtener el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem('carrito')) || [];

    // Añadir el cómic al carrito
    cart.push({
      id: comic.id,
      nombre: comic.nombre,
      precio: comic.precio,
      imagen: comic.imagen,
      descripcion: comic.descripcion,
    });

    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(cart));

    // Si pasas una función para actualizar el estado, llamarla aquí?¿?¿?¿
    if (onAddToCart) onAddToCart(cart);
  };

  return (
    <div id='btn' onClick={handleAddToCarrito}>
      <p>Añadir al carrito</p>
    </div>
  );
}

export default ButtonCard;
