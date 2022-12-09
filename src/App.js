import "./App.css";
import logo from "./logo.svg";
import Componente from "./components/componente";
import Propiedades from "./components/propiedades";
import Estado from "./components/estado";
import RenderizadoCondicional from "./components/renderizadoCondicional";
import RenderizadoElementos from "./components/renderizadoElementos";
import Eventos from "./components/eventos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editars <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente />
          <hr></hr>
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={10}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Manu", elPeluca: "sabeee" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento react</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como una prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <Eventos />
        </section>
      </header>
    </div>
  );
}

export default App;
