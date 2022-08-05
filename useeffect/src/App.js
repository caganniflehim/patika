import {useState} from 'react'
import Counter from './components/counter'
import './App.css';

function App() {
  const [isVisible,setIsVisible]=useState(true);
  return (
    <div className="App">
      { isVisible && <Counter/>}
      <br/>
      <button onClick={()=>setIsVisible(!isVisible)}>togle counter</button>
    </div>
  );
}

export default App;
