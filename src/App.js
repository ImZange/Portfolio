import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola, soy Angy</h1>
        <p>Estudiante de Ingeniería en Computación Inteligente</p>
      </header>

      <section className="tech-stack">
        <h2>Mi Stack Tecnológico</h2>
        <ul>
          <li><strong>Lenguajes:</strong> Python (Decoradores, Lambdas), SQL</li>
          <li><strong>Herramientas:</strong> Docker, Git, Linux</li>
          <li><strong>Cloud:</strong> Azure Static Web Apps</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Proyectos y Aprendizaje</h2>
        <div className="project-card">
          <h3>Minería de Datos</h3>
          <p>Preparando el análisis de grandes volúmenes de datos.</p>
        </div>
        <div className="project-card">
          <h3>Infraestructura</h3>
          <p>Configuración de contenedores con Docker y despliegue continuo en la nube.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 - Portafolio en construcción</p>
      </footer>
    </div>
  );
}

export default App;