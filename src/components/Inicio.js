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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
      }}
    >
    </section>
  );
}

export default Inicio;
