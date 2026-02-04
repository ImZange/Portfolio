import React from 'react';
// Importamos la imagen dándole un nombre (puedes llamarle gaturrona)
import gaturrona from './Sources_Images/gaturrona.jpg'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hola, soy Angy</h1>
        <p>Estudiante de Ingeniería en Computación Inteligente</p>
      </header>
      <section>
        <h2>Mi Stack Tecnológico</h2>
        <p>Python, Docker, SQL y Azure</p>
        <img src={gaturrona} alt="Mi Imagen" style={{ width: '300px' }} />
      </section>
    </div>
  );
}

export default App;