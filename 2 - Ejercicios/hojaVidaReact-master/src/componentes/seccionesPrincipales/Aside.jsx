import React from "react";
import "../styles/styleAside.css";
import NombreFoto from "./componentesAside/NombreFoto";
import DatosPersonales from "./componentesAside/DatosPersonales";
import Competencias from "./componentesAside/Competencias";
import Aptitudes from "./componentesAside/Aptitudes";

//Importo los datos
import { datosUsuario } from "../datos/datosUsuario";
const datosPersonales = datosUsuario.datosPersonales;

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <NombreFoto nombre={datosPersonales.nombre} urlImg="https://media-exp1.licdn.com/dms/image/C4E03AQH6pzGzUQ6dXw/profile-displayphoto-shrink_200_200/0/1630684918565?e=1649894400&v=beta&t=hOKhZZTvfiKUIE-Vj8v4yNHUaNIFQGNURQkQtnV23Vk"/>

        <DatosPersonales
          nombre={datosPersonales.nombre}
          correo={datosPersonales.correo}
          numeroCelular={datosPersonales.numeroCelular}
          direccion={datosPersonales.direccion}
          fechaNacimiento={datosPersonales.fechaNacimiento}
          genero={datosPersonales.genero}
          estadoCivil={datosPersonales.estadoCivil}
        />

        <Competencias competencias={datosUsuario.competencias} />

        <Aptitudes aptitudes={datosUsuario.aptitudes} />
      </aside>
    );
  }
}

export default Aside;
