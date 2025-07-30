import React from 'react';
import './Beneficio.css';

import Hospi from './images/Hospi.png';
import ExamPo from './images/ExamPo.png';
import EvaLua from './images/EvaLua.png';
import Medi from './images/Medi.png';
import Cirugi from './images/Cirugi.png';
import PreOpe from './images/PreOpe.png';

function Beneficios() {
  // Pasos del proceso quirúrgico oncológico
  const pasos = [
    {
      icon: EvaLua,
      
      titulo: "Evaluación Inicial",
      texto: "Consulta con el cirujano oncólogo para diagnóstico y planificación personalizada."
    },
    {
      icon: PreOpe,
      
      titulo: "Exámenes Preoperatorios",
      texto: "Estudios de laboratorio e imágenes para evaluar el estado general del paciente."
    },
    {
      icon: Cirugi,
     
      titulo: "Cirugía Oncológica",
      texto: "Procedimiento quirúrgico especializado para extirpar el tumor y tejidos afectados."
    },
    {
      icon: Hospi,
      
      titulo: "Hospitalización segura",
      texto: "Monitoreo postoperatorio integral y continuo en un entorno seguro y supervisado."
    },
    {
      icon: ExamPo,
      
      titulo: "Seguimiento Postoperatorio",
      texto: "Revisión médica, control de recuperación y manejo de posibles complicaciones."
    },
    {
      icon: Medi,
     
      titulo: "Tratamiento Complementario",
      texto: "Indicación de medicamentos, terapias o cuidados adicionales según evolución."
    }
  ];

  return (
    <section id="planes" className="seccion-beneficios-nueva">
      <div className="beneficios-header-nuevo">
        <h1 className="titulo-principal-nuevo">Proceso Quirúrgico Oncológico</h1>
        <p className="subtitulo-nuevo">
          Conoce las etapas clave en la atención integral de cirugía oncológica.
        </p>
      </div>
      <div className="timeline-oncologo">
        {pasos.map((paso, idx) => (
          <div
            className="timeline-step animar-timeline"
            key={idx}
            style={{ animationDelay: `${idx * 0.18 + 0.2}s` }}
          >
            <div className="timeline-circle animar-circulo">
              <img src={paso.icon} alt={paso.titulo} />
            </div>
            <div className="timeline-box animar-box">
              <h4>{paso.titulo}</h4>
              <p>{paso.texto}</p>
            </div>
          </div>
        ))}
      </div>
     
    </section>
  );
}

export default Beneficios;