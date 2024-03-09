import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import logoAdmingDev from './imagenes/logo.jpg';
import { useState } from 'react';
function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClics = ()=>{
    //console.log("Clic");
    setNumClics(numClics+1);
  };
  const reiniciarContador = ()=>{
    //console.log("reiniciar");
    setNumClics(0);
  };
  return (
    <div className="App">
      <div className='logo-adming-develops'>
        <img className='adming-logo' src={logoAdmingDev} alt='Logo de adming desarrollos' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Clic'
        estadoBtn={true}
        manejarClics={ manejarClics } />
        <Boton
        texto='reiniciar'
        estadoBtn={false}
        manejarClics={ reiniciarContador } />
      </div>
    </div>
  );
}
export default App;
