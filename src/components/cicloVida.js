import React, { Component } from "react";

export default class Ciclovida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aún NO está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
    };

    this.temporizador = null;
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
  };

  componentDidMount(prevProps, prevState) {
    // console.log(1, "El componente ya se encuentra en el DOM");
    // console.log(prevProps);
    // console.log(prevState);
  }

  componentDidUpdate() {
    // console.log(2, "El estado o las props del componente han cambiado");
  }

  render() {
    // console.log(
    //   4,
    //   "El componente se dibuja (o redibuja por algun cambio) en el DOM"
    // );
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        <h3>{this.state.hora}</h3>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
