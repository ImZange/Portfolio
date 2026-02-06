// App.js - Versión mejorada con diseño moderno

import React from 'react';
import './App.css'; // Importa los estilos CSS
import gaturrona from './Sources_Images/gaturrona.jpg'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>PORTFOLIO</h1>
        <p className="tagline">CREATIVE VISUAL & DEVELOPER</p>
        <h2 className="name">Angy</h2>
        <p className="role">Ingeniería en Computación Inteligente</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h3>HELLO.</h3>
          <p>Soy una apasionada por la tecnología y el desarrollo. Me encanta crear soluciones innovadoras y aprender constantemente.</p>
          <p>Este es mi espacio para compartir mis proyectos y conocimientos.</p>
          <a href="https://medium.com/@angy" target="_blank" rel="noopener noreferrer" className="btn-contact">
            Visita mi Blog en Medium
          </a>
        </div>
        <div className="image-container">
          <img src={gaturrona} alt="Angy" className="profile-image" />
        </div>
      </section>

      <section className="skills-section">
        <h3>SKILLS</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-docker"></i>
            <span>Docker</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-microsoft"></i>
            <span>Azure</span>
          </div>
        </div>
      </section>

      <footer className="contact-section">
        <h3>LET'S WORK TOGETHER</h3>
        <div className="social-links">
          <a href="https://medium.com/@angy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium"></i> Medium
          </a>
          <a href="mailto:tuemail@example.com">
            <i className="fas fa-envelope"></i> Contacto
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;