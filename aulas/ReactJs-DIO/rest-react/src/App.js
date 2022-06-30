import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const AppBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #cecece;
`;

function App() {
  const [cientistas, setCientistas] = useState([]);
  
  // Hook equivalente ao componentDidMount()
  useEffect(() => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(response => response.json())
      .then(data => {
      setCientistas(data)
      })
      .catch(error => {
        alert('Erro: ' + error);
      })
  }, []);
  
  return (
    <AppBlock>
      <h1>Cientistas Brasileiras</h1>
      <ul>
        {cientistas.map((cientista, index) => (
          <Item key={index}>
            <div><b>Nome:</b> {cientista.name}</div>
            <div><b>Área:</b> {cientista.area}</div>
          </Item>
        ))}
      </ul>
    </AppBlock>
  );
}

export default App;
