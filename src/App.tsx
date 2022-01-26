import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header/Header"
import {AdDesigner} from "./AdDesigner/AdDesigner"
import {Vote} from "./Vote/Vote"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
      <Vote></Vote>
    </div>
  );
}

export default App;
