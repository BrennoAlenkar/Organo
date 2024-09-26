import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'One Piece',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Naruto',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Dragon Ball',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Bleach',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Attack on Titan',
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: 'Boku no Hero',
      corPrimaria: '#ffBa05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Digimon',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
  
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className='App'>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
