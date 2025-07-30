import React from 'react';
import fonmama from '../components/images/fonmama.jpg';
import './CancerMama.css';

function CancerMama() {
  // Volver a la landing principal
  const goToHome = () => {
    window.location.href = '/';
  };

  return (
    <section className="cancer-mama-hero" style={{
      backgroundImage: `url(${fonmama})`
    }}>
      <div className="cancer-mama-overlay"></div>
      <div className="cancer-mama-container">
        {/* Botón volver arriba */}
        <button
          className="cancer-mama-btn-top"
          onClick={goToHome}
        >
          <span className="arrow-icon">⬅</span>
          Volver al inicio
        </button>
        
        <div className="cancer-mama-content">
          <h1 className="cancer-mama-title">
            CÁNCER DE <span className="cancer-mama-title-blue">MAMA</span>
          </h1>
          
          {/* Texto preventivo */}
          <div className="cancer-mama-prevention">
            <h2 className="prevention-title">Prevención y Detección Temprana</h2>
            <div className="prevention-content">
              <p className="prevention-desc">
                La detección temprana del cáncer de mama salva vidas. Es fundamental realizar 
                autoexámenes mensuales y acudir a controles médicos regulares.
              </p>
              <div className="prevention-tips">
                <div className="tip-item">
                  <div className="tip-icon">🔍</div>
                  <span>Autoexamen mensual después de la menstruación</span>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">👩‍⚕️</div>
                  <span>Examen clínico anual con especialista</span>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">📋</div>
                  <span>Mamografía según recomendación médica</span>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">💪</div>
                  <span>Estilo de vida saludable y ejercicio regular</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video mejorado */}
          <div className="cancer-mama-video">
            <h3 className="video-title">Video Educativo sobre el Cáncer de Mama</h3>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/ey8OL5MeKW0?rel=0"
                title="Video sobre cáncer de mama"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CancerMama;