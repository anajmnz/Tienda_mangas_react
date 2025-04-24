import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/header';

function App() {
  const [comics, setComics] = useState([]);

  const url = "https://api-onepiece-d9mm.onrender.com/libros";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {setComics(Array.isArray(data) ? data : data.results || []);
      })
  }, []);

  return (
    <>
    <Header></Header>

      <h1>Comics</h1>
      <div className="comic-container">
        {comics.map((comic, index) => (
          <Card key={index} comic={comic} />
        ))}
      </div>

    </>
  );
}

export default App;
