import React from "react";
import "../styles/styleMain.css";
import Formacion from "./componentesMain/Formacion";
import Certificados from "./componentesMain/Certificados";

//Importo los datos
import { datosUsuario } from "../datos/datosUsuario";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Formacion formacion={datosUsuario.formaciones}/>
        <Certificados certificados = {datosUsuario.certificados} />
      </main>
    );
  }
}

export default Main;
