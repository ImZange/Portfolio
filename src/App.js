import React from 'react';
import './App.css'; 
import gaturrona from './Sources_Images/gaturrona.jpg'; 

function App() {
  return (
    <div className="App">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">Angy<span className="dot">.</span></div>
        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Tecnologías</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      {/* --- HERO (Encabezado) --- */}
      <header className="hero">
        <div className="hero-content">
            <p className="tagline">Data Engineer and Scientist</p>
            <h1>HOLA, SOY <span className="highlight">ANGY</span></h1>
            <p className="role">Estudiante de Ingeniería en Computación Inteligente</p>
            <a href="#contact" className="btn-primary">Contáctame</a>
        </div>
      </header>

      {/* --- SECCIÓN SOBRE MÍ --- */}
      <section id="about" className="section about-section">
        <div className="container about-container">
          <div className="image-wrapper">
             {/* Círculo decorativo detrás de la foto */}
             <div className="circle-bg"></div>
             <img src={gaturrona} alt="Angy Perfil" className="profile-image" />
          </div>
          <div className="text-content">
            <h2 className="section-title">Sobre mí</h2>
            <p>
              Soy una apasionada por la tecnología y el desarrollo de software. 
              Me especializo en crear soluciones eficientes y escalables. 
              Disfruto transformar ideas complejas en código limpio y funcional.
            </p>
            <p>
              Actualmente estoy profundizando en arquitectura de nube con Azure y 
              desarrollo backend con Python.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN TECNOLOGÍAS --- */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Tecnologías</h2>
          <div className="skills-grid">
            {/* Tarjeta 1 */}
            <div className="skill-card">
              <i className="fab fa-python skill-icon"></i>
              <h3>Python</h3>
              <p>Desarrollo Backend & Scripts</p>
            </div>
            {/* Tarjeta 2 */}
            <div className="skill-card">
              <i className="fab fa-docker skill-icon"></i>
              <h3>Docker</h3>
              <p>Contenedores & Despliegue</p>
            </div>
            {/* Tarjeta 3 */}
            <div className="skill-card">
              <i className="fas fa-database skill-icon"></i>
              <h3>SQL</h3>
              <p>Gestión de Base de Datos</p>
            </div>
            {/* Tarjeta 4 */}
            <div className="skill-card">
              <i className="fab fa-microsoft skill-icon"></i>
              <h3>Azure</h3>
              <p>Cloud Computing</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN PROYECTOS (Nueva) --- */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-info">
                <h3>Blog Personal</h3>
                <p>Plataforma de artículos técnicos escrita en Medium.</p>
                <a href="https://medium.com/@angy" target="_blank" rel="noopener noreferrer" className="btn-small">Ver Blog</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-info">
                <h3>API RESTful</h3>
                <p>Backend desarrollado con Python y Dockerizado.</p>
                <button className="btn-small">Ver GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACTO --- */}
      {/* --- FOOTER / CONTACTO --- */}
      <footer id="contact" className="footer">
        <div className="container">
            <h2>¿Trabajamos juntos?</h2>
            <p>Estoy disponible para nuevos retos y colaboraciones.</p>
            <div className="social-links">
                <a href="https://medium.com/@angy" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                    <i className="fab fa-medium"></i>
                </a>
                <a href="mailto:hola@angy.com" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                </a>
                {/* SOLUCIÓN: Cambiamos # por enlaces genéricos o tu URL real */}
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <p className="copyright">© 2026 Angy. Hecho con React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;