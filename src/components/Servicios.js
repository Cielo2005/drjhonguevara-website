import React, { useState, useEffect } from 'react';
import './Servicios.css';

import fondo from './images/FON.jpg';
import cancer_mama from './images/cancer mama.jpg';
import cancer_ovario from './images/cancer ovario.png';
import cancer_prostata from './images/cancer prostata.png';
import cancer_de_uretra from './images/cancer de uretra.png';
import cancer_endometrio from './images/cancer endometrio.jpg';
import cervix from './images/cervix.png';
import polipo from './images/polipo.jpg';
import tumor from './images/tumor.jpg';
import tumoresbenignos from './images/tumoresbenignos.jpeg';
import sarcomas from './images/sarcomas.jpg';
import laparoscopica from './images/laparoscopica.png';
import histeroscopia from './images/Histeroscopia.jpg';
import vulva from './images/Vulva.jpg';
import pulmon from './images/pulmón.jpg';
import tiroides from './images/tiroides.png';
import timo from './images/Timo.png';
import biliar from './images/biliar.png';
import hepatocarcinoma from './images/Hepatocarcinoma.jpg';
// Iconos específicos por especialidad
import icomama from './images/icomama.png';
import icoovario from './images/icoovario.png';
import icoprostata from './images/icoprostata.png';

import icocervix from './images/icocervix.png';
import icoencometrio from './images/icoencometrio.png';
import icomiomas from './images/icomiomas.png';
import icotumorbordelaine from './images/icotumorbordelaine.png';
import icotumorbenigno from './images/icotumorbenigno.png';
import icosarcomas from './images/icosarcomas.png';
import icolaparoscopica from './images/icolaparoscopica.png';
import icohisteroscopia from './images/icohisteroscopia.png';
import icovulva from './images/icovulva.png';
import icopulmon from './images/icopulmon.png';
import icotiroides from './images/icotiroides.png';
import icotimo from './images/icotimo.png';
import icobiliar from './images/icobiliar.png';
import icoHepatocarcinoma from './images/icoHepatocarcinoma.png';

import icouretra from './images/icouretra.png';

const servicios = [
  {
    titulo: 'Cáncer de Mama',
    imagen: cancer_mama,
    icono: icomama,
    link: '/servicio/mama'
  },
  {
    titulo: 'Cáncer de Próstata',
    imagen: cancer_prostata,
    icono: icoprostata,
   
  },
  {
    titulo: 'Cáncer de Ovario',
    imagen: cancer_ovario,
    icono: icoovario,
    
  },
  {
    titulo: 'Cáncer de Cérvix',
    imagen: cervix,
    icono: icocervix,
    
  },
  {
    titulo: 'Cáncer de Endometrio',
    imagen: cancer_endometrio,
    icono: icoencometrio,
    
  },
  {
    titulo: 'Miomas y Pólipos Uterinos',
    imagen: polipo,
    icono: icomiomas,
    
  },
  {
    titulo: 'Tumores Borderline de Ovario',
    imagen: tumor,
    icono: icotumorbordelaine,
    
  },
  {
    titulo: 'Tumores Benignos de Ovario',
    imagen: tumoresbenignos,
    icono: icotumorbenigno,
    
  },
  {
    titulo: 'Sarcomas Uterinos',
    imagen: sarcomas,
    icono: icosarcomas,
    
  },
  {
    titulo: 'Histerectomía Laparoscópica',
    imagen: laparoscopica,
    icono: icolaparoscopica,
  
  },
  {
    titulo: 'Histeroscopia',
    imagen: histeroscopia,
    icono: icohisteroscopia,
   
  },
  {
    titulo: 'Cáncer de Vulva',
    imagen: vulva,
    icono: icovulva,
    
  },
  {
    titulo: 'Cáncer de Pulmón',
    imagen: pulmon,
    icono: icopulmon,
   
  },
  {
    titulo: 'Cáncer de Tiroides',
    imagen: tiroides,
    icono: icotiroides,
    
  },
  {
    titulo: 'Cáncer de Timo',
    imagen: timo,
    icono: icotimo,
    
  },
  {
    titulo: 'Cáncer de Vesícula Biliar',
    imagen: biliar,
    icono: icobiliar,
    
  },
  {
    titulo: 'Hepatocarcinoma',
    imagen: hepatocarcinoma,
    icono: icoHepatocarcinoma,
   
  },
  {
    titulo: 'Cáncer de Uretra',
    imagen: cancer_de_uretra,
    icono: icouretra,
    
  },
];

function Servicios() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar si es móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Determinar cuántos servicios mostrar según el dispositivo
  const serviciosPerPage = isMobile ? 2 : 4;

  // Validar que currentIndex no exceda los límites
  const validateIndex = (index) => {
    return Math.max(0, Math.min(index, servicios.length - serviciosPerPage));
  };

  const handleCardClick = (servicio) => {
    // Solo permite navegación para Cáncer de Mama
    if (!isAnimating && servicio.titulo === 'Cáncer de Mama' && servicio.link) {
      window.open(servicio.link, '_blank'); // Abre en nueva pestaña
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + serviciosPerPage;
      return nextIndex >= servicios.length ? 0 : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Calcular el último grupo completo según serviciosPerPage
        const totalPages = Math.ceil(servicios.length / serviciosPerPage);
        return (totalPages - 1) * serviciosPerPage;
      }
      return prevIndex - serviciosPerPage;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index * serviciosPerPage);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Obtener servicios visibles según el dispositivo
  const getVisibleServicios = () => {
    const endIndex = Math.min(currentIndex + serviciosPerPage, servicios.length);
    const visible = servicios.slice(currentIndex, endIndex);
    
    // Si no tenemos servicios completos al final, completar con servicios del principio
    while (visible.length < serviciosPerPage && visible.length < servicios.length) {
      const wrapIndex = (currentIndex + visible.length) % servicios.length;
      visible.push({
        ...servicios[wrapIndex],
        originalIndex: wrapIndex
      });
    }
    
    return visible.map((servicio, idx) => ({
      ...servicio,
      originalIndex: servicio.originalIndex !== undefined ? servicio.originalIndex : currentIndex + idx
    }));
  };

  const visibleServicios = getVisibleServicios();

  return (
    <section id="servicios" className="servicios-grid-section">
      <div className="servicios-fondo-blur">
        <img src={fondo} alt="Fondo" />
      </div>
      <div className="servicios-capa-celeste"></div>
      <div className="servicios-grid-header">
        <h1 className="servicios-grid-title">Servicios</h1>
        <p className="servicios-grid-desc">
          Información y atención especializada en los principales tipos de cáncer.
        </p>
      </div>
      
      <div className="servicios-carousel-container">
        <button 
          className={`carousel-arrow carousel-arrow-prev ${isAnimating ? 'disabled' : ''}`} 
          onClick={prevSlide} 
          disabled={isAnimating}
          aria-label="Servicios anteriores"
        >
          <div className="arrow-ripple"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className={`servicios-grid ${isAnimating ? 'animating' : ''}`}>
          {visibleServicios.map((servicio, idx) => (
            <div
              className={`servicio-grid-card ${hoveredCard === servicio.originalIndex ? 'hovered' : ''} ${servicio.titulo === 'Cáncer de Mama' ? 'clickable' : 'non-clickable'}`}
              key={`${servicio.originalIndex}-${currentIndex}`}
              onClick={() => handleCardClick(servicio)}
              onMouseEnter={() => setHoveredCard(servicio.originalIndex)}
              onMouseLeave={() => setHoveredCard(null)}
              tabIndex={servicio.titulo === 'Cáncer de Mama' ? 0 : -1}
              role={servicio.titulo === 'Cáncer de Mama' ? "button" : "presentation"}
              aria-label={servicio.titulo === 'Cáncer de Mama' ? `Ver información sobre ${servicio.titulo}` : servicio.titulo}
              onKeyPress={e => { if (e.key === 'Enter' && servicio.titulo === 'Cáncer de Mama') handleCardClick(servicio); }}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="card-shine"></div>
              <div className="card-glow"></div>
              {servicio.imagen ? (
                <img src={servicio.imagen} alt={servicio.titulo} className="servicio-grid-bg" />
              ) : (
                <div className="servicio-grid-bg servicio-grid-placeholder">
                  <div className="placeholder-pattern"></div>
                </div>
              )}
              <div className="servicio-grid-overlay"></div>
              <div className="servicio-grid-content">
                <div className="icono-container">
                  <img src={servicio.icono} alt="icono" className="servicio-grid-icono" />
                  <div className="icono-glow"></div>
                </div>
                <h3>{servicio.titulo}</h3>
                {servicio.titulo === 'Cáncer de Mama' && (
                  <div className="card-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`carousel-arrow carousel-arrow-next ${isAnimating ? 'disabled' : ''}`} 
          onClick={nextSlide} 
          disabled={isAnimating}
          aria-label="Servicios siguientes"
        >
          <div className="arrow-ripple"></div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(servicios.length / serviciosPerPage) }).map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === Math.floor(currentIndex / serviciosPerPage) ? 'active' : ''} ${isAnimating ? 'disabled' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            aria-label={`Ir a la página ${index + 1}`}
          >
            <div className="indicator-fill"></div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
