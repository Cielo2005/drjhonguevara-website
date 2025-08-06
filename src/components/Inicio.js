import React from 'react';
import './Inicio.css';
import InicioImage from './images/Jhon.jpg';

function Inicio() {
  return (
    <section
      id="inicio"
      className="inicio-section"
      style={{
        backgroundImage: `url(${InicioImage})`,
      }}
    >
      {/* Solo la imagen de fondo, sin overlays ni contenedores */}
    </section>
  );
}

export default Inicio;

