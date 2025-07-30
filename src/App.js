// App.js
import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componentes
import Header from './components/Header';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Historia from './components/Historia';
import Testimonios from './Testimonios';
import Beneficio from './components/Beneficio';
import Equipo from './components/Equipo';
import Galeria from './components/Galeria';
import VideoPeque from './components/VideoPeque';
import Formulario from './Formulario';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CancerMama from './pages/CancerMama';
import PerfilDoctor from './pages/PerfilDoctor';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Inicio />
            <Servicios />
            <Historia />
            <Testimonios />
            <Beneficio />
            <Equipo />
            <Galeria />
            <VideoPeque />
            <Formulario />
            <Footer />
          </div>
        } />
        <Route path="/servicio/mama" element={<CancerMama />} />
        <Route path="/perfil-doctor" element={<PerfilDoctor />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;