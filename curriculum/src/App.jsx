import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { Link } from 'react-scroll';
import './App.css';
import './styles/Desktop.css'
import Skills from './components/Skills';
import About from './components/About';

function App() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [data, setData] = useState({ info: 'Mi nombre es Nahuel Denezio, soy un desarrollador front-end junior de la ciudad de Chivilcoy, Buenos Aires, Argentina. Estoy buscando dar mis primeros pasos en una empresa de desarrollo web para poder aplicar mis habilidades y conocimientos.' });

  const handleClickProyecto = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  const handleClickHome = () => {
    setProyectoSeleccionado(null);
    setData({ info: "Mi nombre es Nahuel Denezio, soy un desarrollador front-end junior de la ciudad de Chivilcoy, Buenos Aires, Argentina. Estoy buscando dar mis primeros pasos en una empresa de desarrollo web para poder aplicar mis habilidades y conocimientos." });
  };

  useEffect(() => {
    handleClickHome();
  }, []);

  return (
    <>
      <Header onClickHome={handleClickHome} />
      <h1>Bienvenido</h1>
      <div className="info">
        {proyectoSeleccionado ? (
          <p className="fadeIn" dangerouslySetInnerHTML={{ __html: proyectoSeleccionado.info }}></p>
        ) : (
          <p className="fadeOut">{data.info}</p>
        )}
      </div>
      <Projects onClickProyecto={handleClickProyecto} />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default App;