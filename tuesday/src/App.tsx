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
      <div className='homepage'>
      <button >Submit Otp </button>
      </div>
      <div className='modal'>
      <OtpInput totalInputs={4} handleChange = {handleChange}/>
      </div>
      
    </div>
  );
}

export default App;
