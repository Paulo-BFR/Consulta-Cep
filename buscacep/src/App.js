import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import './style.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSerach() {

    if (input === '') {
      alert("Insira o CEP!")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
    }
    catch {
      alert("ERRO na requisição!")
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Consulta viaCEP</h1>

      <div className="containerInput">
        <input
          type='text'
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSerach}>
          <FiSearch size={25} color="#rgba(255, 255, 255, 0.2)" />
        </button>
      </div>


      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}


    </div>
  );
}

export default App;
