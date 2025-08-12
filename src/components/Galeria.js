import React, { useState, useEffect } from 'react';
import './Galeria.css';

// Imágenes
import Rejuvenecimiento from './images/galeria1.jpg';
import Contorno from './images/galeria2.jpg';
import Rinoplastia1 from './images/galeria3.jpg';
import Lifting1 from './images/galeria4.jpg';
import Mentoplastia1 from './images/galeria5.jpg';

import Lifting2 from './images/galeria7.jpg';
import Lifting3 from './images/galeria8.jpg';
import Galeria12 from './images/galeria12.jpeg';
import Galeria13 from './images/galeria13.png';
import Galeria14 from './images/galeria14.jpg';

function Galeria() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagenes = [
  { id: 1, src: Rejuvenecimiento, alt: 'Cáncer de Ovario', },
  { id: 2, src: Contorno, alt: 'Tumor Benigno de Ovario',  },
  { id: 3, src: Rinoplastia1, alt: 'Tumor Borderline de Ovario', },
  { id: 4, src: Lifting1, alt: 'Neoplasia de Partes Blandas', descripcion: '(Sarcomas, Neoplasia de Piel)' },
  { id: 5, src: Mentoplastia1, alt: 'Cirugía de Toilette', descripcion: '(cirugía de rescate de cáncer de mama)' },
  { id: 7, src: Lifting2, alt: 'Cáncer de Piel', descripcion: '(Reconstrucción)' },
  { id: 8, src: Lifting3, alt: 'Cáncer de Maxilar Inferior', descripcion: '(Maxilectomía más Disección Radical de Cuello)' },
  { id: 9, src: Galeria12, alt: 'Cáncer de Colon', descripcion: '(Laparoscópico)' },
  { id: 10, src: Galeria13, alt: 'Cáncer Gástrico', descripcion: '(Gastrectomías Subtotales y Totales)' },
  { id: 11, src: Galeria14, alt: 'Cáncer de Tiroides', descripcion: '(Tiroidectomías con o sin Disección de Cuello)' }
];

  // Animación automática cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex + 1 >= imagenes.length ? 0 : prevIndex + 1
      );
    }, 2000); // 2 segundos
    
    return () => clearInterval(interval);
  }, [imagenes.length]);


  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-header">
        <h1>Proyectos Destacados</h1>
        <p>Descubre nuestros trabajos más recientes y destacados</p> 
      </div>
      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <div key={img.id} className="galeria-item">
            <div
              className="galeria-image"
              style={{ backgroundImage: `url(${img.src})` }}
            >
              <div className={`galeria-overlay ${activeIndex === index ? 'active' : ''}`}>
                <h3>{img.alt}</h3>
                {img.descripcion && <p>{img.descripcion}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
