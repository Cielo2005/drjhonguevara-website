import React from 'react';
import './Inicio.css';
import InicioImage from './images/Jhon.jpg';

function Inicio() {
  return (
    <section id="inicio" className="inicio-section">
      <img 
        src={InicioImage} 
        alt="Dr. Jhon Guevara - Cirugía oncológica" 
        className="hero-image"
      />
    </section>
  );
}

export default Inicio;

