import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Header text="Licznik" />

      <Counter />
    </div>
  );
}

export default App;
