import React, { Component } from 'react';
import './App.css';

import Conversor from './componets/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="USD" />
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="USD" />
          <Conversor moedaA="USD" moedaB="CAD" />
        </div>
        <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL" />
          <Conversor moedaA="BRL" moedaB="EUR" />
        </div>
      </div>
    );
  }
}

export default App;
