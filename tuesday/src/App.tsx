import React from 'react';
import logo from './logo.svg';
import './App.css';
import OtpInput from './components/OtpInput'

function App() {
  return (
    <div className="App">
      <OtpInput totalInputs={4}/>
    </div>
  );
}

export default App;
