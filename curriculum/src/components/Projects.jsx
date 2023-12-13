import React from "react";
import '../styles/Card.css'


const Projects = ({ onClickProyecto }) => {

  const handleClickProyecto = (proyecto) => {
    const infoWithLink = `${proyecto.info} <a href="https://www.example.com">Visitar</a>`;
    onClickProyecto({ ...proyecto, info: infoWithLink });
  };

  return (
    <div id="projects">
      <h2>Proyectos</h2>
      <div className="card">
        <a href="#" onClick={(e) => { e.preventDefault(); handleClickProyecto({ nombre: 'Proyecto 1', info: 'DistribuidoraFV es una app que permite gestionar las ventas de una distribuidora de verduras en la que trabaje antes de convertirme en desarrollador web. Para saber más sobre ella, puedes visitar el link ' })}}>DistribuidoraFV</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleClickProyecto({ nombre: 'Proyecto 2', info: 'Los jugadores de golf deben marcar una tarjeta con sus puntajes cada vez que hacen un hoyo y luego firmarla. Con unos amigos desarrolladores decidimos darle una mejor experiencia' })}}>Golf Scorecard</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleClickProyecto({ nombre: 'Proyecto 3', info: 'Si te interesa saber los resultados de cada partido, incluyendo formaciones, tarjetas, goles, asistencias y mas, Futbol 360 es una aplicacion que te permitira ver todos estos datos de forma mas facil' })}}>Futbol 360</a>
      </div> 
    </div>
  );
};

export default Projects;

