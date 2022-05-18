import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTimeout } from './hooks/useTimeout';

function App() {

  const show = useTimeout();
  

  if(!show) return <h1>Loading.....</h1>

 
  return (
    <div className="App">
      <h1>Hello</h1>

    </div>
  );
}

export default App;
