import React from 'react';
import './Footer.css';
import Icono1 from './images/Icono1.png';
import Icono2 from './images/Icono2.png';
import Icono3 from './images/Icono3.png';
import Red1 from './images/Red1.png';
import Red2 from './images/Red2.png';
import Red3 from './images/Red3.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        {/* Línea decorativa superior */}
        <div className="footer-top-line"></div>

        {/* 📦 Secciones del footer */}
        <div className="footer-content">
          {/* Horario */}
          <div className="footer-box">
            <div className="footer-icon-header">
              <div className="header-icon">🕒</div>
              <h2>Horario de atención</h2>
            </div>
            <ul>
              <li>
                <span className="day">Lun - Vie:</span>
                <span className="time">9:00 - 19:00</span>
              </li>
              <li>
                <span className="day">Sábado:</span>
                <span className="time">9:00 - 16:00</span>
              </li>
              <li>
                <span className="day">Domingo:</span>
                <span className="time special">Cerrado</span>
              </li>
            </ul>
            <div className="emergency-note">
              <span>🚨 Emergencias 24/7</span>
            </div>
          </div>

          {/* Contacto */}
          <div className="footer-box">
            <div className="footer-icon-header">
              <div className="header-icon">📞</div>
              <h2>Contáctanos</h2>
            </div>
            <ul>
              <li>
                <img src={Icono1} alt="Teléfono" className="icon" />
                <div className="contact-info">
                  <span className="contact-label">Teléfono</span>
                  <span className="contact-value">987 974 500</span>
                </div>
              </li>
              <li>
                <img src={Icono2} alt="Correo" className="icon" />
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">Erickguevara83@gmail.com</span>
                </div>
              </li>
              <li>
                <img src={Icono3} alt="Dirección" className="icon" />
                <div className="contact-info">
                  <span className="contact-label">Dirección</span>
                  <span className="contact-value">Av. la Cultura 1,302 - Edificio San Luis, consultorio 405 (Frente al Colegio Médico del Cusco) 08000 Cusco, Perú</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="footer-box">
            <div className="footer-icon-header">
              <div className="header-icon">🌐</div>
              <h2>Síguenos</h2>
            </div>
            <ul>
              <li>
                <a href="https://www.facebook.com/drguevara.oncologia" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={Red1} alt="Facebook" className="icon" />
                  <div className="social-info">
                    <span className="social-name">Facebook</span>
                    <span className="social-desc">Noticias y consejos</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dr.guevara.oncologo/?fbclid=IwY2xjawKIyQ5leHRuA2FlbQIxMABicmlkETFjNmNGWnlQMGpDNHF2UEdiAR62lPQ7HZrmI6TYuHw8Uu8wQ7iKjDKgrkclk3JMvE30qBRDvreaqPDvo4zFpw_aem_VWlbC_3nS0Sd6Z_xT9yFqQ" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={Red2} alt="Instagram" className="icon" />
                  <div className="social-info">
                    <span className="social-name">Instagram</span>
                    <span className="social-desc">Contenido visual</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@erickguevarapacheco1" target="_blank" rel="noopener noreferrer" className="social-link">
                  <img src={Red3} alt="TikTok" className="icon" />
                  <div className="social-info">
                    <span className="social-name">TikTok</span>
                    <span className="social-desc">Videos educativos</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección adicional profesional */}
        <div className="footer-professional">
          <div className="professional-info">
            <h3>Dr. Jhon Erick Guevara Pacheco</h3>
            <p>Especialista en Cirugía Oncológica y Laparoscópica</p>
            <div className="credentials">
              <span className="credential">📋 CMP: 12345</span>
              <span className="credential">🏥 Especialista Certificado</span>
              <span className="credential">🎓 15+ años de experiencia</span>
            </div>
          </div>
          <div className="professional-cta">
            <p className="cta-text">¿Necesitas una consulta?</p>
            <a href="https://wa.me/51987974500" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <span className="whatsapp-icon">📱</span>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* 🗺️ Mapa actualizado de Dr. Jhon Guevara */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.0073477248476!2d-71.9593537!3d-13.5244818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f79d15ad04d%3A0xf9e38370d3f35cbf!2sDr.%20Jhon%20Guevara%2C%20Cirug%C3%ADa%20Oncol%C3%B3gica%20-%20Laparosc%C3%B3pica!5e0!3m2!1ses-419!2pe!4v1715106950273!5m2!1ses-419!2pe"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Dr. Jhon Guevara"
          />
        </div>

        {/* Copyright mejorado */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright-section">
            <p className="copyright">
              © 2025 JE Marketing360. Todos los derechos reservados.
            </p>
            <div className="footer-links">
              <span>Desarrollado por M & A</span>
              <span className="separator">•</span>
              <span>Cusco, Perú</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;