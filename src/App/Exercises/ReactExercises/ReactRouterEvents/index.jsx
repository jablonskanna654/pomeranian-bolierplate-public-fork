import React from 'react';

import './style.css';

export function ReactRouterEvents() {
  return (
    <div  className="form--container">

      <h1>Cześć !</h1>
  <label for="textInput">Wpisz tekst:</label>
  <input 
    type="text" 
    id="textInput" 
    placeholder="tekst do wpisania" />
  <input type="button" value="Kliknij" />

      <p>Jestem przykładowym routem ReactRouter</p>
    </div>
  );
}
