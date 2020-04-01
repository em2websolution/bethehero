//import React, {useState} from 'react'; para mudança de variavel realtime
import React from 'react';
import './global.css';
import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

/** JSX - Javascript XML */
/**   dentro da funcion App contador
 * const [counter, setCounter] = useState(0);

   use State retorna um Arrey com 2 parametros
   * [valor, funçãode atualizacao]
   

  function increment () {
    setCounter(counter + 1);
  } 
 return (
      <div>
      <Header>Contador {counter} </Header>
      <button onClick={increment}>Incrementar</button>
   </div>

*/