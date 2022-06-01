import './App.css';
import NamesList from './components/NamesList';
// import Contador from './components/Contador';
// import Formulario from './components/Formulario';
// import Inicio from './components/Inicio';
// import Listado from './components/Listado';
// import Temperatura from './components/Temperatura';

const App = () => { 
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <NamesList />
      {/* <Inicio />
      <Contador />
      <Listado />
      <Temperatura /> */}
      {/* <Formulario /> */}
    </div>
  );
}

export default App;
