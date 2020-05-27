import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Header text="React - Counter" />

      <Counter initValue={2000} initStep={1} />
    </div>
  );
}

export default App;
