import React, { useRef } from 'react';
import './Formulario.css';
import For from './components/images/For.png';

function Formulario() {
  const formRef = useRef();

  const handleReservar = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const nombre = form['nombre'].value;
    const telefono = form['telefono'].value;
    const historia = form['historia'].value;
    const motivo = form['motivo'].value;
    const departamento = form['departamento'].value;
    const fecha = form['fecha'].value;
    const hora = form['hora'].value;

    // Formatear fecha más profesionalmente
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-PE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Formatear hora más profesionalmente
    const horaFormateada = new Date(`2000-01-01T${hora}`).toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

const mensaje = `SOLICITUD DE CITA MÉDICA%0A%0A
Estimado Dr. Jhon Guevara Pacheco,%0A%0A
Reciba un cordial saludo. Por medio del presente, solicito agendar una cita médica con la siguiente información:%0A%0A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A
 DATOS DEL PACIENTE%0A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A
 ●  Nombre completo: ${nombre}%0A
 ● Teléfono de contacto: ${telefono}%0A
 ●  Historia Clínica N°: ${historia}%0A%0A
DETALLES DE LA CONSULTA%0A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A
 ●  Motivo de consulta: ${motivo}%0A
 ●  Especialidad requerida: ${departamento}%0A%0A
FECHA Y HORA SOLICITADA%0A
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A
 ●  Fecha: ${fechaFormateada}%0A
 ●  Hora: ${horaFormateada}%0A%0A
Quedo a la espera de su confirmación para proceder con la reserva.%0A%0A
Atentamente,%0A
${nombre}%0A%0A

 
 *●  Mensaje enviado desde el sitio web oficial*`;

    window.open(`https://wa.me/51987974500?text=${mensaje}`, '_blank');
  };

  return (
    <section id="contacto" className="formulario-cita-section">
      <div className="formulario-cita-container">
        <div className="formulario-cita-img">
          <div className="formulario-cita-texto-lateral">
            <span className="azul">¡No esperes </span>
            <span className="celeste">para reservar tu </span>
            <span className="azul">cita!</span>
          </div>
          <img src={For} alt="Doctora" />
        </div>
        <div className="formulario-cita-form">
          <h2>
            <span className="formulario-cita-title-azul">RESERVA UNA</span><br />
            <span className="formulario-cita-title-negro">Cita Médica</span>
          </h2>
          <form ref={formRef} onSubmit={handleReservar}>
            <div className="formulario-cita-row">
              <div className="formulario-cita-field">
                <label>Nombre</label>
                <input name="nombre" type="text" placeholder="Ej: Juan Pérez" required />
              </div>
              <div className="formulario-cita-field">
                <label>Teléfono</label>
                <input name="telefono" type="text" placeholder="(999) 999-999" required />
              </div>
            </div>
            <div className="formulario-cita-row">
              <div className="formulario-cita-field" style={{ width: '100%' }}>
                <label>Número de Historia Clínica</label>
                <input name="historia" type="text" placeholder="123456-7890-0987" required />
              </div>
            </div>
            <div className="formulario-cita-row">
              <div className="formulario-cita-field">
                <label>Motivo de la visita</label>
                <select name="motivo" required>
                  <option>Consulta oncológica</option>
                  <option>Evaluación pre-operatoria</option>
                  <option>Control post-operatorio</option>
                  <option>Segunda opinión médica</option>
                  <option>Chequeo preventivo</option>
                  <option>Seguimiento de tratamiento</option>
                  <option>Cirugía laparoscópica</option>
                  <option>Diagnóstico especializado</option>
                  <option>Otro motivo</option>
                </select>
              </div>
              <div className="formulario-cita-field">
                <label>Especialidad</label>
                <select name="departamento" required>
                  <option>Cáncer de cervix</option>
                  <option>Cáncer de endometrio</option>
                  <option>Miomas y pólipos uterinos</option>
                  <option>Cáncer de ovario</option>
                  <option>Tumores borderlaine de ovario</option>
                  <option>Tumores benignos de ovario</option>
                  <option>Sarcomas uterinos</option>
                  <option>Histerectomía laparoscópica</option>
                  <option>Histeroscopia</option>
                  <option>Cáncer de vulva</option>
                  <option>Cáncer de pulmón</option>
                  <option>Cáncer de tiroides</option>
                  <option>Cáncer de timo</option>
                  <option>Cáncer de Mama</option>
                  <option>Cáncer de vesícula biliar</option>
                  <option>Hepatocarcinoma</option>
                  <option>Colangiocarcinoma</option>
                  <option>Klatskin</option>
                  <option>Otra especialidad</option>
                </select>
              </div>
            </div>
            <div className="formulario-cita-row">
              <div className="formulario-cita-field">
                <label>Fecha preferida</label>
                <input name="fecha" type="date" required />
              </div>
              <div className="formulario-cita-field">
                <label>Hora preferida</label>
                <input name="hora" type="time" required />
              </div>
            </div>
            <button
              type="submit"
              className="formulario-cita-btn"
              style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}
            >
              � Reservar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;