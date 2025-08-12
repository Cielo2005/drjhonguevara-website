import React, { useState } from 'react';
import './Testimonios.css';
import tes1 from './components/images/tes1.jpg';
import tes2 from './components/images/tes2.png';
import tes3 from './components/images/tes3.jpg';
import tes4 from './components/images/tes4.jpg';
import tes5 from './components/images/tes5.png';


const testimonios = [
    {
    nombre: "Eliana Ñaupa Quispe",
    ubicacion: "Cusco",
    profesion: "Paciente",
    texto: "Excelente médico. Profesional A-1. Su atención es de las mejores, con calidad y con calidez. Persona íntegra, humanitaria, etc. Recomiendo a todos.",
    imagen: tes1,
  },
  {
    nombre: "Isabel Paucar Blanco",
    ubicacion: "Cusco",
    profesion: "Paciente",
    texto: "Dr. Erik Dios bendiga sus manos y su sabiduría para sanar",
    imagen: tes2,
  },
  {
    nombre: "Jissabel Franco Quispe",
    ubicacion: "Cusco",
    profesion: "Paciente",
    texto: "Dios ponga en sus manos la medicina q pueda curar a sus pacientes y le de mucha salud.",
    imagen: tes3,
  },
   {
    nombre: "Isabel Paucar Blanco",
    ubicacion: "Cusco",
    profesion: "Paciente",
    texto: "El Dr. Guevara me opero y me controlo hasta que me recupere, un buen médico con muchísima vocación.",
    imagen: tes4,
  },
  {
    nombre: "Eliana Ñaupa Quispe",
    ubicacion: "Cusco",
    profesion: "Paciente",
    texto: "Acompañamiento en toda etapa desde que recibe el diagnóstico.",
    imagen: tes5,
  },
];


function Testimonios() {
  const [activo, setActivo] = useState(0);

  const handleNav = (dir) => {
    setActivo((prev) =>
      dir === "next"
        ? (prev + 1) % testimonios.length
        : (prev - 1 + testimonios.length) % testimonios.length
    );
  };

  // Función para obtener el índice de la imagen izquierda
  const getLeftIndex = () => {
    return (activo - 1 + testimonios.length) % testimonios.length;
  };

  // Función para obtener el índice de la imagen derecha
  const getRightIndex = () => {
    return (activo + 1) % testimonios.length;
  };

  return (
    <section className="testimonios-modern-section">
      <div className="testimonios-modern-container">
        <div className="testimonios-modern-photos">
          {testimonios.map((t, idx) => {
            let className = 'testimonios-modern-photo';
            let zIndex = 1;
            
            if (idx === activo) {
              className += ' activo';
              zIndex = 3;
            } else if (idx === getLeftIndex()) {
              className += ' izquierda';
              zIndex = 2;
            } else if (idx === getRightIndex()) {
              className += ' derecha';
              zIndex = 2;
            } else {
              className += ' oculto';
              zIndex = 1;
            }
            
            return (
              <img
                key={idx}
                src={t.imagen}
                alt={t.nombre}
                className={className}
                style={{ zIndex }}
              />
            );
          })}
        </div>
        <div className="testimonios-modern-texto">
          <div className="testimonios-modern-label">Testimonio</div>
          <h2>
            Lo que <span className="testimonios-modern-highlight">dicen</span> nuestros pacientes
          </h2>
          <p className="testimonios-modern-frase">
            {testimonios[activo].texto}
          </p>
          <div className="testimonios-modern-persona">
            <span className="testimonios-modern-nombre">{testimonios[activo].nombre}</span>
            <span className="testimonios-modern-prof">{testimonios[activo].profesion} - {testimonios[activo].ubicacion}</span>
          </div>
          <div className="testimonios-modern-nav">
            <button className="testimonios-modern-btn" onClick={() => handleNav("prev")}>&#8592;</button>
            <button className="testimonios-modern-btn" onClick={() => handleNav("next")}>&#8594;</button>
          </div>
          <div className="testimonios-modern-dots">
            {testimonios.map((_, idx) => (
              <span
                key={idx}
                className={`testimonios-modern-dot ${idx === activo ? 'activo' : ''}`}
                onClick={() => setActivo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;