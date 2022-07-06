import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useCallback, useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0);
  const [secondcounter,setSecondCounter] = useState(0);
  const updateCounter = () => {
   
    setCounter((perv) => perv + 1);
  }
 
  // callback is used to memorise the function itself 
 const callbackUpdateCounter = useCallback(() => {
  updateCounter();
 },[]);
  console.log("parent is rendering");
  return (
    <div className="App">
     <Counter counter={counter}  updateCounter={callbackUpdateCounter}/>
      <div>{secondcounter}</div>
    <button onClick={() => setSecondCounter(secondcounter+1)}> Second Increment</button>
    </div>
  );
}

export default App;
