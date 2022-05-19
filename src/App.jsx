import './App.css';
import Contador from './components/Contador';
import Inicio from './components/Inicio';
import Listado from './components/Listado';
import Temperatura from './components/Temperatura';

const App = () => { 
  return (
    <div className="App">
      <Inicio />
      <Contador />
      <Listado />
      <Temperatura />
    </div>
  );
}

export default App;
