import React from 'react';
import logo from './logo.svg';
import './App.css';
import  OtpInput from './components/OtpInput'

function App() {

  const handleChange  = (otp:string) => {
    console.log({otp})
  }
  return (
    <div className="App">
      <button>Submit </button>
      <OtpInput totalInputs={4} handleChange = {handleChange}/>
      
    </div>
  );
}

export default App;
