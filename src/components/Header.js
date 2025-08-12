import React, { useEffect, useState } from 'react';
import './Header.css';
import LOGO from './images/LOGO.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Cambiar el header después de 100px de scroll
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup del event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div id="logo"> {/* CORREGIDO: de LOGO a logo */}
        <img src={LOGO} alt="Logo" />
      </div>

      {/* Botón de Inicio */}
      <div className="home-button">
        <a href="#inicio" className="home-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          <span>Inicio</span>
        </a>
      </div>

      <nav className="nav-izquierda">
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#planes">Beneficios</a></li>
          <li><a href="#equipo">Nuestro Equipo</a></li>
          <li><a href="#galeria">Galería</a></li>
        
        </ul>
      </nav>

      <nav className="nav-derecha">
        <ul>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#historia">Historia</a></li>
        </ul>
      </nav>
    </header>


  );
}

export default Header;