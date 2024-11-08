import React from "react";

class Certificados extends React.Component {
  render() {
    return (
      <section className="certificados">
        <h2>Certificados</h2>
        {this.props.certificados.map((item) => (
          <article>
            <h3>{item.certificacion}</h3>
            <span className="fecha">{item.fecha}</span>
            <span className="institucion">{item.institucion}</span>
          </article>
        ))}
      </section>
    );
  }
}

export default Certificados;
