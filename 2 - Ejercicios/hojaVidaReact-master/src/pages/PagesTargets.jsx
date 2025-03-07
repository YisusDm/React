import React, {Fragment} from 'react';
import "../componentes/styles/style.css"
import Header from "../componentes/seccionesPrincipales/Header";
import Main from "../componentes/seccionesPrincipales/Main";
import Aside from "../componentes/seccionesPrincipales/Aside";
import Footer from "../componentes/seccionesPrincipales/Footer";

class PagesTargets extends  React.Component {
  render(){
    return (
        <Fragment>
            <Header />
            <Aside />
            <Main />
            <Footer />
        </Fragment>

    )
  }
}

export default PagesTargets;