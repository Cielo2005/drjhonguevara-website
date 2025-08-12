import React, { useState } from 'react';
import './Inicio.css';
import InicioImage from './images/Jhon.jpg';
import LOGO from './images/LOGO.png';

function Inicio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="inicio" className="inicio-section">
      {/* Imagen de fondo */}
      <img 
        src={InicioImage} 
        alt="Dr. Jhon Guevara - Cirugía oncológica" 
        className="hero-image"
      />
      
      {/* Logo móvil */}
      <div className="mobile-logo">
        <img src={LOGO} alt="Logo Dr. Jhon Guevara" />
      </div>
      
      {/* Botón hamburguesa */}
      <div className="hamburger-menu">
        <button 
          className={`hamburger-btn ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Menú móvil */}
        <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={toggleMenu}>🏠 Inicio</a></li>
            <li><a href="#servicios" onClick={toggleMenu}>🩺 Servicios</a></li>
            <li><a href="#planes" onClick={toggleMenu}>⭐ Beneficios</a></li>
            <li><a href="#equipo" onClick={toggleMenu}>👥 Nuestro Equipo</a></li>
            <li><a href="#galeria" onClick={toggleMenu}>📸 Galería</a></li>
            <li><a href="#historia" onClick={toggleMenu}>📖 Historia</a></li>
            <li><a href="#contacto" onClick={toggleMenu}>📞 Contacto</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Inicio;
