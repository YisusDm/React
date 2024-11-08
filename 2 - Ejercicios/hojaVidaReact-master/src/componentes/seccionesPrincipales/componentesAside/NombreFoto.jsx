import React from "react";

class NombreFoto extends React.Component {
  render() {
    return (
      <section className="nombrefoto">
        <h1>{this.props.nombre}</h1>
        <img src={this.props.urlImg} alt={this.props.texto} />
      </section>
    );
  }
}

export default NombreFoto;