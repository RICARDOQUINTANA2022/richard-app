import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './component/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const creador  = { nombre: "Rick", creacion: "app"};

  return (
    
    <div className="App">
      <ColorSchemesExample />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="fs-2">
          {creador.nombre} - {creador.creacion}
        </p>
        <div className="app-container">
          <button class= "btn btn-danger font-monospace">BIENVENIDOS A MI APP</button>
        </div>
      </header>
    </div>
  );
}

export default App;
