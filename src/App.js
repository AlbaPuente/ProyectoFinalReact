import React, {Fragment} from "react";
import Formulario from "./Components/Formulario.jsx";
import LetrasApp from "./Components/LetrasApp.jsx";
import BotonNoche from "./Components/BotonNoche.jsx";

function App() {

  return (
    <Fragment>
      <BotonNoche/>
      <LetrasApp />
      <Formulario />
    </Fragment>
    
  );
}

export default App
