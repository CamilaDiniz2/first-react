import React, { useState } from 'react';
import * as S from './styled';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        
        const repositoriesName = [];
        repositories.map((repository) => {
        repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        history.push('./repositories')
      });
  }

  return (
    <>
      <S.Body>
        <S.Title> Procure um usuário do GitHub: </S.Title>
        <S.Input
          className="userInput"
          value = {usuario} 
          placeholder="Nome do usuário"
          onChange={ e => setUsuario(e.target.value)}
        />
        <br/>
        <S.Button 
          type="button"
          onClick={handlePesquisa}> 
          Pesquisar
        </S.Button>
      </S.Body>
    </>
  );
}

export default App;

// useState
// [ usuario, setUsuario]