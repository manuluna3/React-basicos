import React, { Component } from "react";
import Componente from "./componente";

export default function Estado() {
  return (
    <div>
      <h2>El state, ndeaaah</h2>
    </div>
  );
}

function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}
