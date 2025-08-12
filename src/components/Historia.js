import React from 'react';
import './Historia.css';
import historiaImage from './images/historia.png';
import { useNavigate } from 'react-router-dom';

function Historia() {
  const navigate = useNavigate();

  const irAPerfilDoctor = () => {
    navigate('/perfil-doctor');
    // Asegurar scroll al inicio después de la navegación
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="historia" className="historia-section">
      <div className="historia-container">
        <div className="historia-content">
          <div className="historia-info">
            <div className="historia-header">
              
              <h1 className="hospital-name">Dr. Jhon Erick Guevara Pacheco</h1>
              <h2 className="hospital-subtitle">Oncólogo Especialista</h2>
            </div>
            
            <p className="historia-description">
              Especialista en oncología médica con amplia experiencia en el tratamiento integral del cáncer. 
              Comprometido con brindar atención médica de la más alta calidad utilizando tecnología de vanguardia 
              y un enfoque humanizado en el cuidado de nuestros pacientes.
            </p>
            
            <div className="historia-services">
              <div className="services-column">
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Diagnóstico oncológico preciso</span>
                </div>
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Tratamientos de vanguardia</span>
                </div>
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Atención personalizada</span>
                </div>
              </div>
              <div className="services-column">
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Seguimiento integral</span>
                </div>
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Equipo multidisciplinario</span>
                </div>
                <div className="service-item">
                  <span className="checkmark">✓</span>
                  <span>Tecnología médica avanzada</span>
                </div>
              </div>
            </div>
            
            <div className="historia-credentials">
              <div className="credential-item">
                <div className="credential-icon">
                  <div className="years-badge">15+</div>
                </div>
                <div className="credential-text">
                  <span className="credential-number">Años</span>
                  <span className="credential-desc">de experiencia</span>
                </div>
              </div>
              <div className="signature-section">
                <div className="signature-text">Dr. Jhon Guevara</div>
                <div className="signature-title">Oncólogo Especialista</div>
              </div>
            </div>
            
            <button className="ver-mas-btn" onClick={irAPerfilDoctor}>
              Ver más sobre el Doctor
            </button>
          </div>
          
          <div className="historia-image">
            <img src={historiaImage} alt="Dr. Jhon Erick Guevara Pacheco" className="doctor-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Historia;
