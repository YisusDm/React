import React from "react";

class Formacion extends React.Component {
  render() {
    return (
      <section className="formacion">
        <h2>Formación</h2>
        {this.props.formacion.map((item) => (
          <article>
            <h3>{item.nombreCarrera}</h3>
            <span className="fecha">{item.fechaInicio} - {item.fechaFin}</span>
            <span className="institucion">{item.institucion}</span>
          </article>
        ))}
      </section>
    );
  }
}

export default Formacion;
