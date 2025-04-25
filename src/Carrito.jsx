import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from './components/Footer';
import './index.css'



function Carrito() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const meterCart = JSON.parse(localStorage.getItem('carrito')) || [];
    setCart(meterCart);
    console.log(meterCart);
  }, []); 

  // Calcular el precio de los productos
  const precioProductos = cart.reduce((acc, cartItem) => acc + cartItem.precio, 0);

  // Calcular el precio total (productos + envío)
  const precioEnvio = 3.99;
  const precioTotal = precioProductos + precioEnvio;

  // Función para manejar el "Tramitar pedido"
  const handleTramitarPedido = () => {
    const pedido = {
      productos: cart,
      precioTotal,
      precioEnvio,
      precioProductos,
    };
    localStorage.setItem('pedido', JSON.stringify(pedido));

  };

  return (
    <>
      <Header />
      <h1>Carrito</h1>

      <div id="componentes_carrito">

      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div className="carta-comic-pr " key={index} >
              <img id="imagen-comic-pr" src={item.imagen} alt={item.nombre} width="100" height="100" />
              <h3 id="titulo-comic-pr">{item.nombre}</h3>
              <p id="descripcion-comic-pr">{item.descripcion}</p>
              <p id="comic_precio">Precio: ${item.precio}</p>
              
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>

      <div className="box-precio-total">
        <p className="titulo-pedido">RESUMEN DEL PEDIDO</p>
        <p className="precio-productos">
          Precio productos: ${precioProductos.toFixed(2)} €
        </p>
        <p className="precio-envio">
          Precio envío: {precioEnvio.toFixed(2)} €
        </p>
        <hr />
        <p className="precio-total">
          Precio total: ${precioTotal.toFixed(2)} €
        </p>
        <div id="tramitar-pedido" onClick={handleTramitarPedido}>
          <p className="tramitar">Tramitar pedido</p>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Carrito;
