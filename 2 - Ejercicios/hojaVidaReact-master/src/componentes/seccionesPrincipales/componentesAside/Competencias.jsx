import React from "react";

class Competencias extends React.Component {
  render() {
    return (
      <section className="competencias">
        <h2>Competencias</h2>
        <ul>
          {this.props.competencias.map((item) => (
              <li>
              <span className="nombreTecnologia">{item.tecnologia}</span>
              <span className="conocimientoTecnologia"><progress id="file" max="100" value={item.nivel}></progress></span>
              </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Competencias;
