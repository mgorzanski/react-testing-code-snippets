import React, { useState } from 'react';
import logo from './logo.svg';
import Basic from './components/basic/basic_test';
import Counter from './components/Counter/Counter';
import TestHook from './components/TestHook/TestHook';
import './App.css';

const App = () => {
  const [state, setState] = useState('Some Text');
  const [name, setName] = useState('Moe');

  const changeName = () => {
    setName('Steve');
  }

  return (
    <div className="App">
      <Basic />
      <h1>Counter</h1>
      <Counter />
      <h1>Basic Hook useState</h1>
      <TestHook name={name} changeName={changeName} />
    </div>
  );
}

export default App;
