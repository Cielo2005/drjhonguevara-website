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
    especialidad: "Cirujano general - Tórax",
    imagen: equipo1
  },
  {
    nombre: "Dr. Fabian Lopez",
    especialidad: "Cirujano Oncológico",
    imagen: equipo2
  },
  {
    nombre: "Dra. Berioska Ortiz",
    especialidad: "Anestesióloga",
    imagen: equipo3
  },
  {
    nombre: "Dr. Omar Condori",
    especialidad: "Cirujano Oncológico",
    imagen: equipo4
  },
  {
    nombre: "Dr. Guillermo Venero",
    especialidad: "Cirujano general - Abdomen",
    imagen: equipo5
  }
];

const Equipo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar si es móvil
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-avance cada 3 segundos en móvil
  React.useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= teamMembers.length ? 0 : prevIndex + 1
        );
      }, 3000); // 3 segundos
      
      return () => clearInterval(interval);
    }
  }, [isMobile]);
  
  const itemsToShow = isMobile ? 1 : 3;
  
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
  
  // Función para obtener doctores visibles (1 en móvil, 3 en desktop - rotación infinita)
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
        <h1>Nuestro Equipo Médico</h1>
        <p>
          Profesionales especializados comprometidos con la excelencia en atención oncológica 
          y el bienestar integral de nuestros pacientes.
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
