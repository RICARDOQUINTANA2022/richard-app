import logo from './logo.svg';
import './App.css';
import NavPrincipal from './component/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer';

const App = () => {

  const creador  = { nombre: "Rick", creacion: "app"};

  return (
    
    <div className="App">
      <NavPrincipal />
      <ItemListContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="fs-2">
          {creador.nombre} - {creador.creacion}
        </p>
        <div className="app-container">
          <button className= "btn btn-danger font-monospace">BIENVENIDOS A MI APP</button>
        </div>
      </header>
    </div>
  );
}

export default App;
