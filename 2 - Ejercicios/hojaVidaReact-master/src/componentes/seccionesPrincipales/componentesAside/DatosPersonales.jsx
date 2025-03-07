import React from "react";


class DatosPersonales extends React.Component {
  render() {
    return (
      <section className="datospersonales">
        <h2>Datos Personales</h2>
        <p>Nombre: <span>{this.props.nombre}</span></p>
        <p>Correo: <span>{this.props.correo}</span></p>
        <p>Celular: <span>{this.props.numeroCelular}</span></p>
        <p>Direccion: <span>{this.props.direccion}</span></p>
        <p>Fecha Nacimiento: <span>{this.props.fechaNacimiento}</span></p>
        <p>Genero: <span>{this.props.genero}</span></p>
        <p>Estado Civil: <span>{this.props.estadoCivil}</span></p>
      </section>
    );
  }
}

export default DatosPersonales;
