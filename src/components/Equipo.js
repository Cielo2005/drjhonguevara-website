import React, { useState } from 'react';
import './Equipo.css';

import equipo1 from './images/equipo1.png';
import equipo2 from './images/equipo2.png';
import equipo3 from './images/equipo3.png';
import equipo4 from './images/equipo4.png';
import equipo5 from './images/equipo5.png';

const teamMembers = [
  {
    nombre: "Dr. Luis Omar",
    especialidad: "Cirujano Oncólogo",
    imagen: equipo1
  },
  {
    nombre: "Dr. Fabian Lopez", 
    especialidad: "Cirujano General",
    imagen: equipo2
  },
  {
    nombre: "Dra. Berioska Ortiz",
    especialidad: "Anestesióloga",
    imagen: equipo3
  },
  {
    nombre: "Dr. Omar Condori",
    especialidad: "Médico Oncólogo ",
    imagen: equipo4
  },
  {
    nombre: "Dr. Guillermo Venero",
    especialidad: "Médico Quirúrgico",
    imagen: equipo5
  }
];

const Equipo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  
  // Función para ir al siguiente grupo
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= teamMembers.length ? 0 : prevIndex + 1
    );
  };
  
  // Función para ir al grupo anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };
  
  // Función para obtener 3 doctores visibles (rotación infinita)
  const getVisibleDoctors = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push({ ...teamMembers[index], key: `${index}-${currentIndex}` });
    }
    return visible;
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h1>Conozca a nuestros médicos</h1>
        <p>
          Nuestro equipo médico especializado está comprometido con brindar la mejor atención 
          oncológica, combinando experiencia profesional y tecnología avanzada para el cuidado 
          integral de nuestros pacientes.
        </p>
      </div>
      
      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {getVisibleDoctors().map((member, idx) => (
              <div className="doctor-card" key={member.key}>
                <div className="doctor-image-container">
                  <img src={member.imagen} alt={member.nombre} className="doctor-image" />
                  <div className="doctor-overlay">
                    <h3 className="doctor-name">{member.nombre}</h3>
                    <p className="doctor-specialty">{member.especialidad}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Equipo;
