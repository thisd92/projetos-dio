import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import Componente from './components/Component';
import Soma from './components/Soma'
import SomaAlert from './components/SomaAlert'
import Button from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Hello name="Thiago" />
    <Soma />
    <Componente>
      <Button onClick={() => SomaAlert(5, 5)} button="Clique Aqui"/>
    </Componente>
  </div>
);
