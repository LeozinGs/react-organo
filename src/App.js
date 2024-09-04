import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      <Time nome='Programação' />
      <Time nome='Front-end' />
      <Time nome='Data Science' />
    </div>
  );
}

export default App;
