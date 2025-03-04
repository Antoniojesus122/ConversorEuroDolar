import './App.css';
import React, {useState} from 'react';

function App() {
  const [valor, setValor] = useState(null);
  const [resultado, setResultado] = useState(null);
  
  const converter = () => {
    setResultado(valor * 1.17);
  }

  const [explicacion, setExplicacion] = useState(false);
  const mostrarExplicacion = () => {
    setExplicacion(!explicacion);
  }

  return (
    <div className="App">
      <h1 style={{paddingTop: "2rem"}} className='titulo'>Conversor de Euro a Dólar</h1>
      <input className='añadirValor' type="number" onChange={e => setValor(e.target.value)} />
      <button className='button' onClick={converter}>Convertir</button>
      <div> {resultado!=null &&
      <h2 className='resultado'>{resultado} dólares</h2>}
      </div>
      <div>
        {resultado!=null && 
      <button className='button' onClick={mostrarExplicacion}>Ver explicación</button>}
      </div>
      {explicacion!=false && <p>El valor de 1 euro en dólares es de 1.17, por lo tanto, solo debemos multiplicar el valor de euros seleccionado por 1.17</p>}
    </div>
  );

}

export default App;
