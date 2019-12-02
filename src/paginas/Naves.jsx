import React from "react";
import { Link } from "react-router-dom";
import Indice from "../componentes/Indice";

const Naves = props => {
  return (
    <>
      <Indice />
      <Link to="/">Inicio</Link>
    </>
  );
};

export default Naves;
