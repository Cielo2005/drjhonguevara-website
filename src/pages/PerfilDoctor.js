import React, { useState, useEffect, useRef } from 'react';
import './PerfilDoctor.css';
import banner from '../components/images/banner.jpg';
import historiaDoctor from '../components/images/historiadoctor.png';
import banner2 from '../components/images/banner2.jpg';
import telefonoh from '../components/images/telefonoh.png';
import ubicacionh from '../components/images/ubicacionh.png';
import correoh from '../components/images/correoh.png';

// Componente para animar números
const AnimatedNumber = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = parseInt(value);
    const increment = targetValue / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div ref={elementRef} className="numero">
      {count}{suffix}
    </div>
  );
};


function PerfilDoctor() {
  // Scroll automático al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleVolverInicio = (e) => {
    e.preventDefault();
    // Si hay historial, volver atrás; si no, ir a la página principal
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="perfil-doctor">
      {/* Botón para volver al inicio */}
      <div className="volver-inicio-btn">
        <a href="/" onClick={handleVolverInicio} className="btn-volver">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          <span>Volver al Inicio</span>
        </a>
      </div>

      {/* Banner Superior */}
      <section className="perfil-banner">
        <div className="banner-background">
          <img src={banner} alt="Banner" className="banner-img" />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <div className="banner-text">
            <h1>Dr. Jhon Guevara Pacheco</h1>
            <p>Médico Cirujano Oncólogo y Laparoscopista, dedicado a la prevención, diagnóstico y tratamiento quirúrgico del cáncer.</p>
          </div>
         
        </div>
      </section>

      {/* Sección Principal */}
      <section className="perfil-main">
        <div className="perfil-container">
          <div className="perfil-content">
            
            {/* Perfil Personal */}
            <div className="perfil-personal">
              <div className="personal-content">
                <h2>Perfil personal</h2>
                <div className="personal-image">
                </div>
                <p>Soy el Dr. Jhon Guevara, Médico Cirujano Oncólogo y Laparoscopista, dedicado a la prevención, diagnóstico y tratamiento quirúrgico del cáncer. Con años de experiencia en el campo oncológico, me esfuerzo por brindar atención de la más alta calidad a cada uno de mis pacientes.</p>
                
                <h3>Atención a cargo del especialista:</h3>
                <div className="especialista-info">
                  <h4>Dr. Jhon Erick Guevara Pacheco</h4>
                  <ul>
                    <li>Médico Cirujano Oncólogo</li>
                    <li>Magister en Cirugía Oncoplástica</li>
                    <li>Especialista en Laparoscopia Oncológica</li>
                  </ul>
                </div>
                
                <p>Mi objetivo es ofrecer tratamientos personalizados y avanzados para combatir el cáncer, utilizando técnicas quirúrgicas mínimamente invasivas para mejorar la calidad de vida de mis pacientes. Estoy comprometido con la salud y el bienestar de aquellos que depositan su confianza en mi cuidado.</p>
                
                <p className="contacto-final">Estoy aquí para ayudarte. ¡No dudes en contactarme!</p>
                
                <h3>Formación y Especialidades</h3>
                <div className="formacion-image">
                </div>
                
                <h4>Conóceme:</h4>
                <ul className="formacion-lista">
                  <li>Cirugía Oncológica: Universidad San Agustín de Arequipa</li>
                  <li>Residentado Médico: Hospital Goyeneche</li>
                  <li>Maestría en Cirugía Oncoplástica: Complejo Hospitalario A Coruña - España</li>
                  <li>Laparoscopía Oncológica: Hospital de Córdoba - Argentina</li>
                  <li>Cirugía de Cabeza y Cuello: Grupo Español TTCC</li>
                  <li>Urología Oncológica: INCAN - México</li>
                  <li>Ginecología Oncológica: Hospital Italiano - Argentina</li>
                </ul>
                
                
                
                <h3>Conoce a tu médico</h3>
               
                <ul className="credenciales">
                  <li>🔘 Maestria cirugia oncoplastica de mama (Complejo Hospitalario Universitario A Coruña-valencia 🇪🇸)</li>
                  <li>🔘 Ginecologia oncologica-hospital italiano- Argentina 🇦🇷.</li>
                  <li>🔘 Tumores de cabeza y cuello TTCC-españa🇪🇸.</li>
                  <li>🔘 Urologia oncologica México Incan 🇲🇽</li>
                </ul>
              </div>
            </div>

            {/* Imagen del Doctor */}
            <div className="perfil-imagen">
              <img src={historiaDoctor} alt="Dr. Jhon Guevara" className="doctor-imagen" />
              
              {/* Tarjeta de Información */}
              <div className="info-card">
                <h3>Horas de trabajo</h3>
                <div className="horarios">
                  <div className="horario-item">
                    <span>Lun - Vie</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="horario-item">
                    <span>Sábado - Viernes</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="horario-item">
                    <span>Dom</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                
                <h4>Consulta al Dr. Guevara</h4>
                <div className="contacto-info">
                  <div className="contacto-item-info">
                    <img src={ubicacionh} alt="Ubicación" className="contacto-icon" />
                    <div className="contacto-text">
                      <p>Dirección</p>
                      <p className="direccion">Av. la Cultura 1,302 - Edificio San Luis, consultorio 405 (Frente al Colegio Médico del Cusco), Cusco, Peru, 08000</p>
                    </div>
                  </div>
                  
                  <div className="contacto-item-info">
                    <img src={telefonoh} alt="Teléfono" className="contacto-icon" />
                    <div className="contacto-text">
                      <p>Llámanos al número reservado</p>
                      <p className="telefono">+51 987 974 500</p>
                    </div>
                  </div>
                  
                  <div className="contacto-item-info">
                    <img src={correoh} alt="Correo" className="contacto-icon" />
                    <div className="contacto-text">
                      <p>Envía un correo electrónico a</p>
                      <p className="email">erickguevara83@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <a href="https://wa.me/51987974500?text=Hola%20Dr.%20Jhon%2C%20quiero%20reservar%20una%20cita%20m%C3%A9dica." target="_blank" rel="noopener noreferrer">
                  <button className="reservar-btn">Reservar una cita</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="estadisticas-section">
        <div className="estadisticas-banner">
          <img src={banner2} alt="Banner 2" className="banner2-img" />
          <div className="estadisticas-overlay"></div>
        </div>
        <div className="estadisticas-content">
          <h2>El Dr. Guevara en cifras</h2>
          <p>Datos que reflejan mi compromiso con la excelencia médica y el cuidado de mis pacientes.</p>
          
          <div className="estadisticas-grid">
            <div className="estadistica-item">
              <AnimatedNumber value="15" suffix="+" duration={2000} />
              <div className="descripcion">
                <h4>Años de experiencia</h4>
                <p>Especialista en cirugía oncológica con amplia trayectoria profesional.</p>
              </div>
            </div>
            
            <div className="estadistica-item">
              <AnimatedNumber value="500" suffix="+" duration={2500} />
              <div className="descripcion">
                <h4>Pacientes atendidos</h4>
                <p>Casos exitosos en tratamientos oncológicos y cirugías especializadas.</p>
              </div>
            </div>
            
            <div className="estadistica-item">
              <AnimatedNumber value="15" suffix="+" duration={3000} />
              <div className="descripcion">
                <h4>Certificaciones internacionales</h4>
                <p>Formación especializada en España, Argentina y México.</p>
              </div>
            </div>
            
            <div className="estadistica-item">
              <AnimatedNumber value="95" suffix="%" duration={3500} />
              <div className="descripcion">
                <h4>Éxito en tratamientos</h4>
                <p>Alto porcentaje de recuperación satisfactoria en pacientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PerfilDoctor;
            