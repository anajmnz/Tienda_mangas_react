import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/header';

function App() {
  const [comics, setComics] = useState([]);

  const url = "https://api-onepiece-d9mm.onrender.com/libros";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setComics(Array.isArray(data) ? data : data.results || []);
      });
  }, []);

  const handleAddToCart = (updatedCart) => {
    // Actualiza el carrito al añadir un producto
    setCart(updatedCart);
  };

  return (
    <>
      <Header />
      <h1>Comics</h1>
      <div className="comic-container">
        {comics.map((comic, index) => (
          <Card key={index} comic={comic} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
